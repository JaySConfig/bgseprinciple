document.addEventListener("DOMContentLoaded", function () {
    const footerHTML = `
      <footer class="text-sm text-gray-500 border-t pt-6 mt-10 space-y-2">
        <p>&copy; 2025 The BGSE Principle. All rights reserved.</p>
        <div class="flex flex-col sm:flex-row sm:space-x-4">
          <a href="selfishness-myth.html" class="text-blue-600 underline">The Selfishness Myth</a>
          <a href="fear-vs-growth.html" class="text-blue-600 underline">Fear vs Growth</a>
          <a href="understanding-your-energy.html" class="text-blue-600 underline">Understanding Your Energy System</a>
          <a href="garden-of-least-fulfilment.html" class="text-blue-600 underline">The Garden of Least Fulfilment</a>
          <a href="dont-give-reasons.html" class="text-blue-600 underline">The Don’t Give Reasons Rule</a>
          <a href="manipulation-detection.html" class="text-blue-600 underline">Manipulation Detection Framework</a>
          <a href="about.html" class="text-blue-600 underline">About</a>
          <a href="sitemap.html" class="text-blue-600 underline">Sitemap</a>
        </div>
      </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  });
  