import React, { useRef, useEffect } from 'react'

/**
 * Criar um
 * @returns {HTMLElement}
 */
function createRootElement(id) {
	const rootContainer = document.createElement('div')
	rootContainer.setAttribute('id', id)
	return rootContainer
}

/**
 * Appends element as last child of body.
 * @param {HTMLElement} rootElem
 */
function addRootElement(rootElem) {
	document.body.insertBefore(
		rootElem,
		document.body.lastElementChild.nextElementSibling
	)
}

function usePortal(id) {
	const rootElemRef = useRef(null)

	useEffect(
		function setupElement() {
			const existingParent = document.querySelector(`#${id}`)
			const parentElem = existingParent || createRootElement(id)

			// checar se o elemento já existe
			if (!existingParent) {
				addRootElement(parentElem)
			}

			// Adicionando um pai
			parentElem.appendChild(rootElemRef.current)

			return function removeElement() {
				rootElemRef.current.remove()
				if (!parentElem.childElementCount) {
					parentElem.remove()
				}
			}
		},
		[id]
	)

	function getRootElem() {
		if (!rootElemRef.current) {
			rootElemRef.current = document.createElement('div')
		}
		return rootElemRef.current
	}

	return getRootElem()
}

export default usePortal
