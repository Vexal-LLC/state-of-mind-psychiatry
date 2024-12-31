import { ImageResponse } from "@vercel/og";
import { createElement as h } from "react";
import fs from "node:fs/promises";
import path from "node:path";

interface Props {
  params: { slug: string };
  request: Request;
}

export async function GET({ params, request }: Props) {
  // Load fonts
  const interRegular = await fs.readFile(
    path.join(
      process.cwd(),
      "node_modules/@fontsource/inter/files/inter-latin-400-normal.woff"
    )
  );

  const interBold = await fs.readFile(
    path.join(
      process.cwd(),
      "node_modules/@fontsource/inter/files/inter-latin-700-normal.woff"
    )
  );

  const vollkornBold = await fs.readFile(
    path.join(
      process.cwd(),
      "node_modules/@fontsource/vollkorn/files/vollkorn-latin-800-normal.woff"
    )
  );

  // Load favicon
  const favicon = await fs.readFile(
    path.join(process.cwd(), "public", "favicon.png")
  );
  const faviconDataUrl = `data:image/png;base64,${favicon.toString("base64")}`;

  const templates = {
    home: () => ({
      headline: [
        { text: "Transform" },
        { text: "Struggles", highlight: true },
        { text: "into" },
        { text: "Strengths", highlight: true },
      ],
      subtitle:
        "Start your journey to a healthier, happier you by booking an appointment with our expert team.",
      cta: "Schedule Today",
    }),
    about: () => ({
      headline: [
        { text: "Meet Our" },
        { text: "Expert", highlight: true },
        { text: "Mental Health" },
        { text: "Team", highlight: true },
      ],
      subtitle:
        "Compassionate professionals dedicated to your well-being and mental health journey.",
      cta: "Learn More",
    }),
    services: () => ({
      headline: [
        { text: "We" },
        { text: "Care" },
        { text: "About" },
        { text: "You", highlight: true },
      ],
      subtitle:
        "Personalized treatment approaches for anxiety, depression, ADHD, and more.",
      cta: "View Services",
    }),
    contact: () => ({
      headline: [
        { text: "Ready to Start" },
        { text: "Your", highlight: true },
        { text: "Healing" },
        { text: "Journey?", highlight: true },
      ],
      subtitle:
        "Get in touch with our team to schedule your initial consultation.",
      cta: "Contact Us",
    }),
  };

  const template =
    templates[params.slug as keyof typeof templates]?.() || templates.home();

  const html = h(
    "div",
    {
      tw: "flex bg-neutral-900 w-full h-full flex items-center justify-center relative p-20",
    },
    [
      h(
        "div",
        {
          tw: "flex flex-col items-center w-full max-w-5xl relative",
          style: { zIndex: 1 },
        },
        [
          // Dynamic headline rendering
          h(
            "div",
            {
              tw: "flex flex-wrap justify-center items-center text-[80px] text-neutral-200 mb-8 tracking-wider",
              style: {
                fontFamily: "Vollkorn",
                lineHeight: 1.2,
                letterSpacing: "0.01em",
                maxWidth: "1000px",
              },
            },
            template.headline.map((word) =>
              h(
                "span",
                {
                  tw: "mx-4",
                  style: { display: "flex" },
                },
                word.highlight
                  ? h(
                      "span",
                      {
                        tw: "relative",
                        style: { display: "flex" },
                      },
                      [
                        h("span", {
                          tw: "absolute bottom-3 left-0 h-1 w-full",
                          style: {
                            background: "#C28F7C",
                            opacity: 0.4,
                            height: "8px",
                            borderRadius: "2px",
                          },
                        }),
                        h("span", { tw: "text-[#C28F7C]" }, word.text),
                      ]
                    )
                  : word.text
              )
            )
          ),
          // Dynamic subtitle
          h(
            "div",
            {
              tw: "text-3xl font-medium text-neutral-300 mb-16 max-w-4xl text-center",
              style: {
                fontFamily: "Inter Bold",
                lineHeight: 1.4,
              },
            },
            template.subtitle
          ),
          // Dynamic CTA button
          h(
            "div",
            {
              tw: "px-12 py-6 bg-[#484848] text-white rounded-full font-semibold text-4xl border border-neutral-500",
              style: {
                fontFamily: "Inter Bold",
                boxShadow: "0 12px 32px rgba(255, 255, 255, 0.1)",
              },
            },
            template.cta
          ),
        ]
      ),
    ]
  );

  return new ImageResponse(html, {
    width: 1200,
    height: 600,
    fonts: [
      {
        name: "Inter Regular",
        data: interRegular,
        weight: 400,
        style: "normal",
      },
      {
        name: "Inter Bold",
        data: interBold,
        weight: 700,
        style: "normal",
      },
      {
        name: "Vollkorn",
        data: vollkornBold,
        weight: 800,
        style: "normal",
      },
    ],
  });
}

export async function getStaticPaths() {
  // Define your static pages here
  const pages = ["home", "about", "contact", "services"];
  return pages.map((page) => ({
    params: { slug: page },
  }));
}
