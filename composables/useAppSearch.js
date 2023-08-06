export default function useAppSearch () {
  function openSearch () {
    const element = document.getElementsByTagName('body')[0]
    element.setAttribute('data-search-results', true)
  }

  function closeSearch () {
    const element = document.getElementsByTagName('body')[0]
    element.removeAttribute('data-search-results')
  }

  return {
    openSearch,
    closeSearch
  }
}
