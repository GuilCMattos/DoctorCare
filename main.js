window.addEventListener('scroll', onScroll)
onScroll()
function onScroll() { 
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  

}

function activateMenuAtCurrentSection(section) { 
  const targetLine = scrollY + (innerHeight / 2)
  
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedLine = targetLine >= sectionTop

  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine



  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu ul li a[href*=${sectionId}`)

  const sectionBoundaries = sectionTopReachOrPassedLine && !sectionEndPassedTargetLine

  menuElement.classList.remove('active')
  if(sectionBoundaries) { 
    menuElement.classList.add('active')
  }
}











function showNavOnScroll() { 
  if(scrollY === 0) { 
    navigation.classList.remove('scroll')
  } else { 
    navigation.classList.add('scroll')
  }
}

function showBackToTopButtonOnScroll() { 
  if(scrollY > 200) { 
    backToTopButton.classList.add('show')
  } else { 
    backToTopButton.classList.remove('show')
  }
}

function openMenu() { 
  document.body.classList.add('menu-expanded')
}

function closeMenu() { 
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin:'top',
  distance: '30px',
  duration: 700
}).reveal(`
.content, 
.content img, 
.box-content, 
#services, 
.cards,
.card,
#about,
#contact,
footer`)