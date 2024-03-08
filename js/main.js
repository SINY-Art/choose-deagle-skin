
	const caseOne = document.querySelector('.item-left__back--js')
	const caseTwo = document.querySelector('.item-right__back--js')
	const leftButton = document.querySelector('.item-left__front--js')
	const rightButton = document.querySelector('.item-right__front--js')
	const leftSection = document.querySelector('.item-left--js')
	const rightSection = document.querySelector('.item-right--js')

	if (window.innerWidth > 992) {
			leftButton.addEventListener('click', () => {
				if (leftButton.classList.contains('active')) {
					leftButton.classList.remove('active')
				} else {
					leftButton.classList.add('active')
					rightSection.style.opacity = '0'
					caseOne.style.transform = 'translateX(455px)'
					caseOne.style.animation = 'moveSideToSideLeftCase .5s ease-in-out'
				}
			})

			rightButton.addEventListener('click', () => {
				if (rightButton.classList.contains('active')) {
					rightButton.classList.remove('active')
				} else {
					rightButton.classList.add('active')
					leftSection.style.opacity = '0'
					caseTwo.style.transform = 'translateX(-455px)'
					caseTwo.style.animation = 'moveSideToSideRightCase .5s ease-in-out'
				}
			})
	}  else if (window.innerWidth < 787) {
		leftButton.addEventListener('click', () => {
			if (leftButton.classList.contains('active')) {
				leftButton.classList.remove('active')
			} else {
				leftButton.classList.add('active')
				rightSection.style.opacity = '0'
				caseOne.style.transform = 'translateY(415px)'
				caseOne.style.animation = 'moveDownToSideRightCase .5s ease-in-out'
			}
		})

		rightButton.addEventListener('click', () => {
			if (rightButton.classList.contains('active')) {
				rightButton.classList.remove('active')
			} else {
				rightButton.classList.add('active')
				leftSection.style.opacity = '0'
				caseTwo.style.transform = 'translateY(-415px)'
				caseTwo.style.animation = 'moveUpToSideLeftCase .5s ease-in-out'
			}
		})
	}

 