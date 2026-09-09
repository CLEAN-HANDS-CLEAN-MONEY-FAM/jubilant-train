"""Tests for the evidence hashing tools.

Code authored with AI assistance at the direction of, and owned by:
    Morley Moses Apooch — Founder, CEO & Manager
    Contact: apoochmorley@protonmail.com
"""

from __future__ import annotations

import pytest

from src.hash_tools import compute_sha256, evidence_record, manifest_digest, verify_digest

EMPTY_SHA256 = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
ABC_SHA256 = "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"


class TestComputeSha256:
    def test_empty_input(self):
        assert compute_sha256(b"") == EMPTY_SHA256

    def test_known_vector(self):
        assert compute_sha256(b"abc") == ABC_SHA256

    def test_rejects_non_bytes(self):
        with pytest.raises(TypeError):
            compute_sha256("not bytes")


class TestVerifyDigest:
    def test_match(self):
        assert verify_digest(b"abc", ABC_SHA256)

    def test_match_case_insensitive(self):
        assert verify_digest(b"abc", ABC_SHA256.upper())

    def test_mismatch(self):
        assert verify_digest(b"abc", EMPTY_SHA256) is False

    def test_rejects_bad_format(self):
        with pytest.raises(ValueError):
            verify_digest(b"abc", "deadbeef")


class TestEvidenceRecord:
    def test_record_fields(self):
        rec = evidence_record(b"abc", label="receipt")
        assert rec["label"] == "receipt"
        assert rec["sha256"] == ABC_SHA256
        assert rec["size_bytes"] == 3
        assert "timestamp_utc" in rec
        assert rec["owner"] == "Morley Moses Apooch"

    def test_record_with_gps(self):
        gps = {"lat": 52.1332, "lon": -106.6700}
        rec = evidence_record(b"data", gps=gps, label="geo_evidence")
        assert rec["gps"] == gps
        assert rec["owner"] == "Morley Moses Apooch"


class TestManifestDigest:
    def test_manifest_computation(self):
        r1 = evidence_record(b"file1", label="f1")
        r2 = evidence_record(b"file2", label="f2")
        digest = manifest_digest([r1, r2])
        assert isinstance(digest, str)
        assert len(digest) == 64