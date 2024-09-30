const mongoose = require('mongoose');

// UNAPPROVED - Admin, Accountant can modify, delete the document no problemo
// APPROVED - Admin, Accountant can only delete document in which it is still not in used by the company
// USED - This document is already in used and cannot be modify, delete no more or else this might pose some problem for the business itself
const documentStatus = ["UNAPPROVED", "APPROVED", "USED"];

const quotationSchema = mongoose.Schema({
    businessID: mongoose.Schema.Types.ObjectId,
    quotationNumber: String, // Needed another ID to identify each document by date and stuff
    status: documentStatus
}, {
    timestamps: true,
    versionKey: true
});

const invoiceSchema = mongoose.Schema({
    businessID: mongoose.Schema.Types.ObjectId,
    invoiceNumber: String, // Needed another ID to identify each document by date and stuff
    status: documentStatus
}, {
    timestamps: true,
    versionKey: true
});

const TaxInvoiceSchema = mongoose.Schema({
    businessID: mongoose.Schema.Types.ObjectId,
    taxInvoiceNumber: String, // Needed another ID to identify each document by date and stuff
    status: documentStatus
}, {
    timestamps: true,
    versionKey: true
});

const Quotation = mongoose.model("quotations", quotationSchema);
const Invoice = mongoose.model("invoices", invoiceSchema);
const TaxInvoice = mongoose.model("tax_invoices", taxInvoiceSchema);
const Receipt = mongoose.model("receipts", receiptSchema);
const PurchaseOrder = mongoose.model("purchase_orders", purchaseOrderSchema);
module.exports = { Quotation, Invoice, TaxInvoice, Receipt, PurchaseOrder }