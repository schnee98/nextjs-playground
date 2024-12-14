import { updateInvoice } from "@/app/lib/actions";
import { CustomerField, InvoiceForm } from "@/app/lib/definitions";

export default function EditInvoiceForm({ invoice, customers }: { invoice: InvoiceForm; customers: CustomerField[] }) {
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);

  return <form action={updateInvoiceWithId}></form>;
}
