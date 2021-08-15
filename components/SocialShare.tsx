import React from 'react'

// Share buttons
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share'

import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  InstapaperIcon,
  LinkedinIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share'

interface Props { }

export const SocialShare = (props: Props) => {
  return (
    
    <aside className="social-share-wrapper">
      <TwitterShareButton
        title={'test'}
        url={'https://peing.net/ja/'}
        hashtags={['hashtag1', 'hashtag2']}
      >
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
    </aside>

  )
}
