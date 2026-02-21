"use client";
import SectionHeader from "./sectionHeader";
import Typography from "./typography";
import Image from "next/image";
import Container from "./spacing";
import Link from "next/link";

export default function ArticleHeader({
  backText = "Back to Blog",
  backIcon = "https://placehold.co/20x20",
  breadcrumbIcon = "https://placehold.co/20x20",
  category = "Team Building",
  title = "Building High-Performing Teams in a Remote-First World",
  authorImage = "https://placehold.co/48x48",
  authorName = "Michael Chen",
  dateIcon = "https://placehold.co/20x20",
  date = "Oct 28, 2025",
  readTimeIcon = "https://placehold.co/20x20",
  readTime = "7 min read",
}) {
  return (
    <div className="blog-details-container">
      <Container className="blog-details-padding" variant="blockSpacing">
        <div className="blogs-details-header-container">

          {/* BACK LINK */}
          <Link href="/blogs" className="flex gap-2 items-center">
            <Image src={backIcon} alt="" width={20} height={20} />
            <Typography variant="body-4" colorVariant="gray">
              {backText}
            </Typography>
          </Link>

          {/* BREADCRUMB */}
          <div className="flex gap-2 items-center">
            <Typography variant="body-4" colorVariant="gray">Blog</Typography>
            <Image src={breadcrumbIcon} width={20} height={20} alt="" />
            <Typography variant="h6">{title}</Typography>
          </div>

          {/* MAIN TITLE */}
          <SectionHeader
            label={category}
            title={title}
            align="left"
            labelBgColor="white"
          />

          {/* AUTHOR BOX */}
          <div className="blog-author-meta">
            <div className="blog-author-meta__profile">
              <Image
                src={authorImage}
                alt={authorName}
                width={48}
                height={48}
                className="blog-author-meta__avatar"
              />
              <Typography variant="h6" className="blog-author-meta__name">
                {authorName}
              </Typography>
            </div>

            <div className="blog-details-time-date flex items-center">
              <div className="blog-author-meta__item">
                <Image src={dateIcon} width={20} height={20} alt="" />
                <Typography variant="body-5" colorVariant="gray">
                  {date}
                </Typography>
              </div>

              <div className="blog-author-meta__dot" />

              <div className="blog-author-meta__item">
                <Image src={readTimeIcon} width={20} height={20} alt="" />
                <Typography variant="body-5" colorVariant="gray">
                  {readTime}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
