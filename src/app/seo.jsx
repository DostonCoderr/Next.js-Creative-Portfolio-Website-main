import Head from "next/head";
import React from "react";


const SEO = ({ children, metaKeywords, metaTitle }) => {
    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=5"
          />
          <title>{metaTitle}</title>
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <meta name="keywords" content={metaKeywords} />
          <meta name="keywords:tag" content={metaKeywords} />
          <meta name="author" content="Dostoncoder" />
          <meta
            name="description"
            content="Front-end developer (JSX & TSX), web developer. Operational layout. I work with observance of terms and performance of Test tasks."
          />
          <meta
            name="og:description"
            content="Front-end developer (JSX & TSX), web developer. Operational layout. I work with observance of terms and performance of Test tasks."
          />
          <meta
            name="google-site-verification"
            content="dznEGAcVnJar9UKlznB9EXwv20RNls8rb-AXHhSl2iY"
          />
          <meta
            name="description"
            content="Front-end developer (JSX & TSX), web developer. Operational layout. I work with observance of terms and performance of Test tasks."
          />
          <meta property="og:url" content="https://dostoncoder.uz" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Dostoncoder - Portfolio" />
          <meta
            property="og:description"
            content="Front-end developer (JSX & TSX), web developer. Operational layout. I work with observance of terms and performance of Test tasks."
          />
          <meta
          property="og:image"
          content=""
        />
        <meta property="twitter:domain" content="dostoncoder.uz" />
        <meta property="twitter:url" content="https://dostoncoder.uz" />
        <meta name="twitter:title" content="Dostoncoder - Portfolio" />
        <meta
          name="twitter:description"
          content="Front-end developer (JSX & TSX), web developer. Operational layout. I work with observance of terms and performance of Test tasks."
        />
        <meta
          name="twitter:image"
          content=""
        />
        <meta
          property="og:image"
          content=""
        />
        <meta
          property="og:description"
          content="Front-end developer (JSX & TSX), web developer. Operational layout. I work with observance of terms and performance of Test tasks."
        />
        <meta property="og:site" content="@Dostoncoder" />
        <meta name="twitter:site" content="@Dostoncoder" />
      </Head>
      {children}
    </>
  );
};

export default SEO;