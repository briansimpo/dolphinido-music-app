const showSidebar = ref(false)

export function useSidebarToggle () {
  function toggleSidebar () {
    showSidebar.value = !showSidebar.value

    const body = document.getElementsByTagName('body')[0]

    if (showSidebar.value) {
      body.setAttribute('data-sidebar-toggle', true)
    } else if (!showSidebar.value) {
      body.removeAttribute('data-sidebar-toggle')
    }
  }

  return {
    toggleSidebar
  }
}
