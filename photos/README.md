# photos/

Put the 15 photos here with **exactly** these names (lowercase, `.jpg`):

| File | Used in |
|---|---|
| 01-gown-grey.jpg | polaroid (scratch) |
| 02-smile.jpg | photocard + "open when you forgot how to smile" |
| 03-gloomy.jpg | photocard |
| 04-with-baby.jpg | photocard + memory map |
| 05-forest.jpg | photocard |
| 06-medals.jpg | polaroid (scratch) |
| 07-photobooth-1.jpg | photocard |
| 08-photobooth-2.jpg | photocard |
| 09-gown-blue.jpg | polaroid (scratch) |
| 10-airport.jpg | photocard + memory map |
| 11-baking.jpg | polaroid (scratch) |
| 12-pies.jpg | polaroid (scratch) |
| 13-studying.jpg | photocard |
| 14-car-mirror.jpg | photocard |
| 15-photoism-strip.jpg | photocard |

Then run `python tools/compress_photos.py` (max 1200px wide, removes EXIF/GPS).

If a face gets cut off or a phone status bar shows, change `pos` / `zoom` for that
photo in `CONFIG.photos` at the top of `script.js`. Until a photo exists, the site
shows a soft pastel placeholder in its place.
