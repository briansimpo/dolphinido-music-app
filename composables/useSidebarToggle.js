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

  function openSidebar () {
    showSidebar.value = true
    const body = document.getElementsByTagName('body')[0]
    body.setAttribute('data-sidebar-toggle', true)
  }

  function closeSidebar () {
    showSidebar.value = false
    const body = document.getElementsByTagName('body')[0]
    body.removeAttribute('data-sidebar-toggle')
  }

  return {
    toggleSidebar,
    openSidebar,
    closeSidebar
  }
}
