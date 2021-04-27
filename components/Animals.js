import React from 'react'

// prettier-ignore
const zoo = ['🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼','🐻‍❄️','🐨','🐯','🦁','🐮','🐷','🐽','🐸','🐵','🐒','🐔','🐧','🐦','🐤','🐣','🐥','🦆','🦅','🦉','🦇','🐺','🐗','🐴','🦄','🐝','🪱','🐛','🦋','🐌','🐞','🐜','🪰','🪲','🪳','🦟','🦗','🕷','🕸','🦂','🐢','🐍','🦎','🦖','🦕','🐙','🦑','🦐','🦞','🦀','🐡','🐠','🐟','🐬','🐳','🐋','🦈','🦭','🐊','🐅','🐆','🦓','🦍','🦧','🦣','🐘','🦛','🦏','🐪','🐫','🦒','🦘','🦬','🐃','🦒','🦘','🦬','🐃','🐂','🐄','🐎','🐖','🐏','🐑','🦙','🐐','🦌','🐕','🐩','🦮','🐕‍🦺','🐈','🐈‍⬛','🪶','🐓','🦃','🦤','🦚','🦜','🦢','🦩','🕊','🐇','🦝','🦨','🦡','🦫','🦦','🦥','🐁','🐀','🐿','🦔','🌵','🎄','🌲','🌳','🌴','🍀','☘️','🌿','🍄','🌷','🌺','🌹','🐉','🐲']

function rand(ceiling) {
	return Math.floor(Math.random() * ceiling)
}

const Animals = ({ count }) => {
	const animals = []
	for (let i = 0; i < count; i++) {
		animals.push(
			React.createElement(
				'span',
				{
					key: i,
					className: rand(count) % 2 ? '' : 'flipX',
					style: { fontSize: `calc((100vw / ${count}) - 1vw)` },
				},
				zoo[rand(zoo.length)]
			)
		)
	}
	return <h1 className='clock brobding'>{animals}</h1>
}

export default Animals
