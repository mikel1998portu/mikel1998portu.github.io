// JavaScript for adding a map to the location menu
const locations = document.querySelectorAll('.location');
locations.forEach(location => {
  const address = location.textContent;
  const mapUrl = `https://maps.google.com/maps?q=${address}`;
  const mapLink = document.createElement('a');
  mapLink.href = mapUrl;
  mapLink.textContent = 'View on Map';
  location.appendChild(mapLink);
});
