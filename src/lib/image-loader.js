const bucketUrl = 'https://instar-assets.tempo.co';

export default function cloudflareLoader({ src, width, quality }) {
  const params = [`width=${width}`, `quality=${quality || 75}`, 'format=auto']
  let end = '';

  if (src.startsWith('https')) {
    end = src
  } else if (src.startsWith('/')) {
    end = `${bucketUrl}${src}`
  } else {
    end = bucketUrl + `/${src}`
  }

  return `https://www.tempo.co/cdn-cgi/image/${params.join(',')}/${end}`
}