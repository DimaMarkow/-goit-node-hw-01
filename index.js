const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
    case "get":
      const oneContact = await contacts.getContactById(id);
      return console.log(oneContact);
    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);
    // case "updateById":
    //   const updateBook = await contacts.updateById(id, { title, author });
    //   return console.log(updateBook);
    case "remove":
      const deleteContact = await contacts.removeContact(id);
      return console.log(deleteContact);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// const actionIndex = process.argv.indexOf("--action");

// if (actionIndex !== -1) {
//   const action = process.argv[actionIndex + 1];
//   invokeAction({ action });
// }

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "drsAJ4SHPYqZeG-83QTVW" });
// invokeAction({
//   action: "add",
//   name: "Worm",
//   email: "worm@mail.com",
//   phone: "123456789",
// });
// invokeAction({action: "updateById", id: "K3USWrLTkWWGcPpPFvL1X", title: "Ward", author: "John C. McCrae"})
// invokeAction({
//   action: "remove",
//   id: "qdggE76Jtbfd9eWJHrssH",
// });
