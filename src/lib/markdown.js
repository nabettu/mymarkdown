import marked from 'marked';
marked.setOptions({
  breaks: true,
});

export default function(text){
  return marked(text)
    .replace(/\[ \]/gi, '<input type="checkbox">')
    .replace(/\[x\]/gi, '<input type="checkbox" checked="checked">');
}
