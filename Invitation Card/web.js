// Function to generate the birthday invitation card
function generateBirthdayInvitation(name, age, date, time, venue, rsvpDate, contactName, contactInfo) {
    // Creating the card container element
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('birthday-card');
  
    // Adding content to the card
    const heading = document.createElement('h2');
    heading.textContent = 'BIRTHDAY PARTY';
    cardContainer.appendChild(heading);
  
    const invitationText = document.createElement('p');
    invitationText.innerHTML = `You're Invited to Celebrate <span>${name}'s ${age}th Birthday!</span>`;
    cardContainer.appendChild(invitationText);
  
    const details = document.createElement('div');
    details.innerHTML = `
      <p>Date: ${date}</p>
      <p>Time: ${time}</p>
      <p>Venue: ${venue}</p>
      <p>Join us for a day of fun, laughter, and celebration with <span>${name}</span></p>
    `;
    cardContainer.appendChild(details);
  
    // const rsvp = document.createElement('p');
    // rsvp.innerHTML = `RSVP by <span>${rsvpDate}</span> to <span>${contactName}</span> at <span>${contactInfo}</span>`;
    // cardContainer.appendChild(rsvp);
  
    // Appending the card to the document body
    document.body.appendChild(cardContainer);
  }
  
  // Example usage
  generateBirthdayInvitation(
    'Soe Moe Kyaw',
    19,
    'July 15, 2023',
    '3:00 PM',
    'Only One',
    'July 5, 2023',
    
  );
  