frappe.ui.form.on('Warehouse', {
  refresh: (frm) => {
    if (!frm.doc.__islocal) {
      frm.add_custom_button(__('Make WBS Warehouse & Specify WBS Settings'), () => {
        frappe.set_route('Form', 'WBS Settings', 'new').then(() => {
          frappe.model.set_value('WBS Settings', 'new', 'warehouse', frm.doc.name);
        });
      });
    }
  }
});
