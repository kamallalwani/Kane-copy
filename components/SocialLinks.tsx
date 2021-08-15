import React from 'react'
import { FaTwitter, FaGithub, FaLinkedin, FaTwitch,  FaGoodreads, FaYoutube, FaInstagram } from 'react-icons/fa'
import { SiLetterboxd } from 'react-icons/si'

import * as config from 'lib/config'
import styles from './styles.module.css'

interface Props {
  
}

export const SocialLinks = (props: Props) => {
  return (
    <>
      {config.twitter && (
          <a
            className={styles.twitter}
            href={`https://twitter.com/${config.twitter}`}
            title={`Twitter @${config.twitter}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTwitter />
          </a>
        )}

         {config.twitch && (
          <a
            className={styles.twitter}
            href={`https://www.twitch.tv/${config.twitch}`}
            title={`Twitch @${config.twitch}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTwitch />
          </a>
        )}

        {config.letterboxd && (
          <a
            className={styles.twitter}
            href={`https://letterboxd.com/${config.letterboxd}`}
            title={`Letterboxd @${config.letterboxd}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <SiLetterboxd />
          </a>
        )}

{config.instagram && (
          <a
            className={styles.twitter}
            href={`https://www.instagram.com/${config.instagram}`}
            title={`Instagram @${config.instagram}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram />
          </a>
        )}

{config.goodreads && (
          <a
            className={styles.twitter}
            href={`https://www.goodreads.com/user/show/${config.goodreads}`}
            title={`Goodreads @${config.goodreads}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGoodreads />
          </a>
        )}

        {config.github && (
          <a
            className={styles.github}
            href={`https://github.com/${config.github}`}
            title={`GitHub @${config.github}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub />
          </a>
        )}

        {config.linkedin && (
          <a
            className={styles.linkedin}
            href={`https://www.linkedin.com/in/${config.linkedin}`}
            title={`LinkedIn ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin />
          </a>
        )}
      
    </>
  )
}
