# Credo design comparison

One preview: http://localhost:3011/

Use the bottom switcher to choose **Variant 1** or **Variant 2**. The two homepages render directly in the same Next.js app, sharing navigation and news. There are no embedded external previews.

- Variant 1 homepage: http://localhost:3011/?v=1
- Variant 2 homepage: http://localhost:3011/?v=2
- Variant 2 loans page: http://localhost:3011/loans

Selection is retained across reloads and normal navigation. Keys 1 and 2 or left/right arrows switch designs; R restarts the preview. Existing input fields, menus, calculator tabs and news controls keep their own keyboard behavior. Switching homepages preserves the current products, calculator or news section where available.

Our design currently has no standalone loans listing. Choosing Variant 1 from /loans returns to our homepage. The loans page remains accessible through the consumer menu's სესხი heading.

Our homepage uses the existing components and assets, with its current Dayavi page copied into this app. The Figma homepage and loans page use the supplied Georgian text, layouts and artwork. The original checkout and server on port 3010 have not been changed.

Implementation:

- components/OurWebsite.jsx: our homepage.
- components/figma-website/: the other designer's pages.
- components/design-comparison/: the two-design comparison and picker.
- lib/read-design-preference.js: initial selection from the URL or saved preference.

Restart with npm run dev -- --hostname 127.0.0.1 --port 3011 from this directory.

Verification: production build passes. Browser checks cover both designs, reload and navigation persistence, typing without switching, keyboard switching, mobile widths, and switching from the loans page to our homepage. Screenshots are in verification/.

No changes have been pushed.
