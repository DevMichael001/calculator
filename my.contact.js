// Function to load contacts from local storage
function loadContacts() {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    const contactsDiv = document.getElementById('contacts');
    contactsDiv.innerHTML = '';
  
    // Display each contact with a delete button
    contacts.forEach((contact, index) => {
      const contactDiv = document.createElement('div');
      contactDiv.classList.add('contact');
      contactDiv.innerHTML = `
        <strong>Name:</strong> ${contact.name}, <strong>Phone:</strong> ${contact.phone}
        <button onclick="deleteContact(${index})" style="margin-left: 10px; color: red;">Delete</button>
      `;
      contactsDiv.appendChild(contactDiv);
    });
  }
  
  // Function to add a new contact
  function addContact() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
  
    if (name && phone) {
      const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      contacts.push({ name, phone });
      localStorage.setItem('contacts', JSON.stringify(contacts));
  
      document.getElementById('name').value = '';
      document.getElementById('phone').value = '';
  
      loadContacts();
      alert('Contact added successfully.');
    } else {
      alert('Please enter both name and phone number.');
    }
  }
  
  // Function to delete a contact
  function deleteContact(index) {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  
    // Ask for confirmation before deleting
    const confirmDelete = confirm(`Are you sure you want to delete the contact "${contacts[index].name}"?`);
    if (confirmDelete) {
      contacts.splice(index, 1); // Remove the contact at the specified index
      localStorage.setItem('contacts', JSON.stringify(contacts)); // Update local storage
      loadContacts(); // Refresh the displayed contact list
      alert('Contact deleted successfully.');
    }
  }
  
  // Load contacts when the page loads
  window.onload = loadContacts;
  