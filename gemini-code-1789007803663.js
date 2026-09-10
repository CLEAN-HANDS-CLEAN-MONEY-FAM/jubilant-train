const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

// In-memory asset ledger initialized with your direct banking profile data
const userAssets = {
  accountHolder: "Morley Apooch",
  institution: "Peoples Trust Company / KOHO",
  accountNumber: "218176346904",
  transitNumber: "16001",
  institutionNumber: "621",
  currency: "CAD",
  availableBalance: 500.00, // Local ledger starting asset balance
  ledgerHistory: []
};

// Route to get current asset status
app.get('/api/assets', (req, res) => {
  res.json({
    accountHolder: userAssets.accountHolder,
    institution: userAssets.institution,
    accountNumber: `****${userAssets.accountNumber.slice(-4)}`,
    availableBalance: userAssets.availableBalance,
    currency: userAssets.currency
  });
});

// Route to execute a payment using local asset ledger
app.post('/api/pay', (req, res) => {
  const { amount, description } = req.body;

  if (!amount || amount <= 0) {
    return res.status(400).json({ success: false, message: 'Invalid payment amount.' });
  }

  if (userAssets.availableBalance < amount) {
    return res.status(400).json({ success: false, message: 'Insufficient funds in asset account.' });
  }

  // Deduct from internal asset ledger
  userAssets.availableBalance -= parseFloat(amount);
  
  const transaction = {
    id: `TX-${Date.now()}`,
    timestamp: new Date().toISOString(),
    amount: parseFloat(amount),
    description: description || 'Internal Asset Transfer',
    remainingBalance: userAssets.availableBalance
  };

  userAssets.ledgerHistory.push(transaction);

  res.json({
    success: true,
    message: 'Payment executed successfully using local asset balance.',
    transaction
  });
});

app.listen(PORT, () => {
  console.log(`CleanHands Asset Application running at http://localhost:${PORT}`);
});