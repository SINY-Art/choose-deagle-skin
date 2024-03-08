
	const caseOne = document.querySelector('.item-back__left--js')
	const caseTwo = document.querySelector('.item-back__right--js')
	const leftButton = document.querySelector('.front-item__left--js')
	const rightButton = document.querySelector('.front-item__right--js')
	const leftSection = document.querySelector('.item__left--js')
	const rightSection = document.querySelector('.item__right--js')

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

 