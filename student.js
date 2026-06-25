// Student Portal JavaScript
function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    if (event) {
        event.target.classList.add('active');
    }
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        window.location.href = 'index.html';
    }
}

function initiateRemitaPayment() {
    const amount = document.getElementById('paymentAmount').value;
    
    if (!amount || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }

    // Simulate Remita Payment
    alert(`Redirecting to Remita Payment Gateway...\n\nAmount: ₦${amount}\n\nStudent: Chukwu Adekunle\nMatric: 2022/001234`);
    
    // In production, this would integrate with Remita API
    // For now, simulate successful payment
    setTimeout(() => {
        alert('Payment successful!\n\nReference: REM' + Math.random().toString().slice(2, 14));
        generateInvoice('INV-2024-' + Math.random().toString().slice(2, 7));
    }, 1000);
}

function generateInvoice(invoiceNo) {
    const invoiceContent = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <h2 style="color: #003366; margin: 0;">INVOICE</h2>
            <p style="margin: 0.5rem 0;">UniCore University</p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem;">
            <div>
                <h3>Bill To:</h3>
                <p>
                    <strong>Chukwu Adekunle</strong><br>
                    Matric No: 2022/001234<br>
                    Program: Civil Engineering<br>
                    chukwu.adekunle@unicore.edu.ng
                </p>
            </div>
            <div style="text-align: right;">
                <p><strong>Invoice No:</strong> ${invoiceNo}</p>
                <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
                <p><strong>Due Date:</strong> ${new Date(Date.now() + 14*24*60*60*1000).toLocaleDateString()}</p>
            </div>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
            <thead>
                <tr style="background: #f5f7fa; border-bottom: 2px solid #003366;">
                    <th style="text-align: left; padding: 1rem;">Description</th>
                    <th style="text-align: right; padding: 1rem;">Amount (₦)</th>
                </tr>
            </thead>
            <tbody>
                <tr style="border-bottom: 1px solid #ddd;">
                    <td style="padding: 1rem;">Tuition Fee (2024/2025)</td>
                    <td style="text-align: right; padding: 1rem;">900,000</td>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                    <td style="padding: 1rem;">Laboratory Fee</td>
                    <td style="text-align: right; padding: 1rem;">150,000</td>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                    <td style="padding: 1rem;">Technology Fee</td>
                    <td style="text-align: right; padding: 1rem;">50,000</td>
                </tr>
                <tr style="background: #f5f7fa; font-weight: bold;">
                    <td style="padding: 1rem;">TOTAL</td>
                    <td style="text-align: right; padding: 1rem;">1,100,000</td>
                </tr>
            </tbody>
        </table>

        <div style="background: #f5f7fa; padding: 1.5rem; border-radius: 0.5rem; margin-bottom: 1rem;">
            <h3 style="margin-top: 0;">Payment Details:</h3>
            <p><strong>Payment Method:</strong> Remita</p>
            <p><strong>Reference:</strong> REM${Math.random().toString().slice(2, 14)}</p>
            <p><strong>Payment Status:</strong> <span style="color: #27ae60; font-weight: bold;">COMPLETED</span></p>
        </div>

        <div style="border-top: 2px solid #003366; padding-top: 1rem; text-align: center; color: #666; font-size: 0.9rem;">
            <p>Thank you for your payment. This is an official receipt from UniCore University.</p>
            <p>For queries, contact: billing@unicore.edu.ng | +234 (1) 234-5678</p>
        </div>
    `;

    document.getElementById('invoiceContent').innerHTML = invoiceContent;
    openModal('invoiceModal');
}

function printInvoice() {
    window.print();
}

function downloadInvoicePDF() {
    alert('PDF download functionality would be implemented here.');
    // In production, use a library like jsPDF to generate PDF
}

function downloadTranscript() {
    alert('Transcript download initiated...\n\nFile: Transcript_2024.pdf');
    // In production, this would trigger actual file download
}

console.log('Student Portal Loaded!');
