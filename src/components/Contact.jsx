import { openingHours, socials } from '../../constants/index.js'
import { useGSAP } from '@gsap/react'
import { SplitText} from 'gsap/all';
import gsap from 'gsap';

const Contact = () => {
 	useGSAP(() => {
		const titleSplit = SplitText.create('#contact h2', { type: 'words' });
		
		const timeline = gsap.timeline({
		 scrollTrigger: {
			trigger: '#contact',
			start: 'top center',
		 },
		 ease: "power1.inOut"
		})
	 
	 timeline
		.from(titleSplit.words, {
		 opacity: 0, yPercent: 100, stagger: 0.02
	 })
		.from('#contact h3, #contact p', {
			opacity: 0, yPercent: 100, stagger: 0.02
	 })
		.to('#f-right-leaf', {
		 y: '-50', duration: 1, ease: 'power1.inOut'
	 }).to('#f-left-leaf', {
		 y: '-50', duration: 1, ease: 'power1.inOut'
	 }, '<')
	})
 
 return (
	<footer id="contact">
	 <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
	 <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />
	 
	 <div className="content">
		<h2>My Contact</h2>
		
		<div>
		 <h3>FrontEnd Developer</h3>
		 <p>Phakaphol Dherachaisuphakij</p>
		</div>
		
		<div>
		 <h3>Contact Us</h3>
		 <p>(+66) 95 956 0008</p>
		 <p>phakaphol.dher@mail.kmutt.ac.th</p>
		</div>
		
		
		<div>
		 <h3>Socials</h3>
		 
		 <div className="flex-center gap-5">
			{socials.map((social) => (
			 <a
			 	key={social.name}
				href={social.url}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={social.name}
			 >
				<img src={social.icon} />
			 </a>
			))}
		 </div>
		</div>
	 </div>
	</footer>
 )
}

export default Contact
