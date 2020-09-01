const loadForm = async () => {
  const html = await (await fetch('https://alexander-eryomenko.github.io/index/')).json()
  document.body.appendChild(document.createElement('main')).innerHTML = html
}
loadForm()