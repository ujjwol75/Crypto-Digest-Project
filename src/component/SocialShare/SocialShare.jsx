import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaPinterest,
  FaMailBulk,
  FaTelegram,
} from 'react-icons/fa';
import Link from 'next/link';


const SocialShare = (props) => {
  const { url, title, hashtag, image } = props
  return (
    <div style={{ display: "flex", gap: "10px", marginLeft: "4px", padding: "4px", justifyContent: "start" }}>

      <Link
        href='https://www.facebook.com/sharer/sharer.php?u=https%3A//insidecrypto.news/'
        passHref
      >
        <a target='_blank' rel='noreferrer'>
          <FaFacebook
            style={{
              width: '30px',
              height: '30px',
              cursor: 'pointer',
            }}
          />
        </a>
      </Link>

      <Link href='https://twitter.com/intent/tweet?text=https%3A//insidecrypto.news/'>
        <FaTwitter
          style={{
            width: '30px',
            height: '30px',
            cursor: 'pointer',
          }}
        />
      </Link>
      <Link href='https://www.linkedin.com/shareArticle?mini=true&url=insidecrypto.news&title=&summary=&source='>
        <FaLinkedinIn
          style={{
            width: '30px',
            height: '30px',
            cursor: 'pointer',
          }}
        />
      </Link>
      <Link href='https://pinterest.com/pin/create/button/?url=https://insidecrypto.news/&media=&description='>
        <FaPinterest
          style={{
            width: '30px',
            height: '30px',
            cursor: 'pointer',
          }}
        />
      </Link>
      <Link href='mailto:info@example.com?&subject=&cc=&bcc=&body=https://insidecrypto.news/%0A'>
        <FaMailBulk
          style={{
            width: '30px',
            height: '30px',
            cursor: 'pointer',
          }}
        />
      </Link>
      <Link href='https://t.me/cryptomediahub'>
        <FaTelegram
          style={{
            width: '30px',
            height: '30px',
            cursor: 'pointer',
          }}
        />
      </Link>
    </div>

  );
};

export default SocialShare;
// <div style={{ display: "flex", gap: "10px", marginLeft: "4px", padding: "4px", justifyContent: "start" }}>

{/* <FacebookShareButton
        url={url}
        quote={title}
        hashtag={hashtag}
        image={image}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton
        url={url}
        quote={title}
        hashtag={hashtag}
        image={image}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton
        url={url}
        quote={title}
        hashtag={hashtag}
        image={image}
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <PinterestShareButton
        url={url}
        quote={title}
        hashtag={hashtag}
        image={image}
      >
        <PinterestIcon size={32} round />
      </PinterestShareButton>
      <EmailShareButton
        url={url}
        quote={title}
        hashtag={hashtag}
        image={image}
      >
        <EmailIcon size={32} round />
      </EmailShareButton>
      <TelegramShareButton
        url={url}
        quote={title}
        hashtag={hashtag}
        image={image}
      >
        <TelegramIcon size={32} round />
      </TelegramShareButton>
      <HatenaShareButton
        url={url}
        quote={title}
        hashtag={hashtag}
        image={image}
      >
        <HatenaIcon size={32} round />
      </HatenaShareButton>
      <InstapaperShareButton
        url={url}
        quote={title}
        hashtag={hashtag}
        image={image}
      >
        <InstapaperIcon size={32} round />
      </InstapaperShareButton>

      <FacebookMessengerShareButton
        url={url}
        quote={title}
        hashtag={hashtag}
        image={image}
      >
        <FacebookMessengerIcon size={32} round />
      </FacebookMessengerShareButton>

      <WhatsappShareButton
        url={url}
        quote={title}
        hashtag={hashtag}
        image={image}
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton> */}
{/* </div> */ }