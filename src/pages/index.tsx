import * as React from "react"
import Helmet from "react-helmet"
import type { HeadFC, PageProps } from "gatsby"
import { Modal } from 'antd';
import { useState } from "react";

import logo from "../images/logo.png"
import banner from "../images/banner.png"

const IndexPage: React.FC<PageProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState('');

  return (

    <main>

      <Helmet>
        <meta property="og:image" content={banner} />
        <meta property="og:title" content="WORN AND FADED" />
        <meta property="og:description" content="lessGAP is a professional web/app design and marketing/brands company based in the United States. We provide web design and development services for small and medium businesses." />
      </Helmet>

    </main>

  )
}

export default IndexPage

export const Head: HeadFC = () => <title>WORN AND FADED</title>
