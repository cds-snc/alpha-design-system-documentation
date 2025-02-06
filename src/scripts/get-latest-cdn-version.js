// async function getLatestCdnVersion() {
//   const cdnLatestVersion = document.getElementById('cdn-latest-version');
//   const cdnLatestVersionDate = document.getElementById('cdn-latest-version-date');
//   const codeElements = document.querySelectorAll('.attr-value');

//   try {
//     // Fetch package metadata
//     const response = await fetch(
//       'https://registry.npmjs.org/@cdssnc/gcds-components',
//     );
//     const data = await response.json();

//     // Get latest version and release date
//     const latestVersion = data['dist-tags'].latest;
//     const releaseDate = new Date(data.time[latestVersion]);

//     // Format the release date to 'YYYY-MM-DD'
//     const formattedReleaseDate = `${releaseDate.getFullYear()}-${String(releaseDate.getMonth() + 1).padStart(2, '0')}-${String(releaseDate.getDate()).padStart(2, '0')}`;

//     // Update the latest version and release date in the description
//     cdnLatestVersion.textContent = latestVersion;
//     cdnLatestVersionDate.textContent = formattedReleaseDate;

//     // Update CDN links with the latest version
//     codeElements.forEach(element => {
//       element.textContent = element.textContent.replace('||version||', latestVersion);
//     });
//   } catch (error) {
//     console.error('Error fetching latest version:', error);

//     // Update the latest version and release date in the description
//     cdnLatestVersion.textContent = '{{ latestCdnVersion.version }}';
//     cdnLatestVersionDate.textContent = '{{ latestCdnVersion.releaseDate }}';

//     // Update CDN links with fallback version if fetch fails
//     codeElements.forEach(element => {
//       element.textContent = element.textContent.replace('||version||', '{{ latestCdnVersion.version }}');
//     });
//   }
// }

// getLatestCdnVersion();
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded');

  async function getLatestCdnVersion() {
    const cdnLatestVersion = document.getElementById('cdn-latest-version');
    const cdnLatestVersionDate = document.getElementById('cdn-latest-version-date');
    const codeElements = document.querySelectorAll('.attr-value');

    try {
      // Fetch package metadata
      const response = await fetch(
        'https://registry.npmjs.org/@cdssnc/gcds-components',
      );
      const data = await response.json();

      // Get latest version and release date
      const latestVersion = data['dist-tags'].latest;
      const releaseDate = new Date(data.time[latestVersion]);

      // Format the release date to 'YYYY-MM-DD'
      const formattedReleaseDate = `${releaseDate.getFullYear()}-${String(releaseDate.getMonth() + 1).padStart(2, '0')}-${String(releaseDate.getDate()).padStart(2, '0')}`;

      // Update the latest version and release date in the description
      cdnLatestVersion.textContent = latestVersion;
      cdnLatestVersionDate.textContent = formattedReleaseDate;

      // Update CDN links with the latest version
      codeElements.forEach(element => {
        element.textContent = element.textContent.replace('||version||', latestVersion);
      });
    } catch (error) {
      console.error('Error fetching latest version:', error);

      // Update the latest version and release date in the description
      cdnLatestVersion.textContent = '{{ latestCdnVersion.version }}';
      cdnLatestVersionDate.textContent = '{{ latestCdnVersion.releaseDate }}';

      // Update CDN links with fallback version if fetch fails
      codeElements.forEach(element => {
        element.textContent = element.textContent.replace('||version||', '{{ latestCdnVersion.version }}');
      });
    }
  }

  getLatestCdnVersion();
});
