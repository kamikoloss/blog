import { indexTypes } from './scrablog.const'

const appConfig = {
  // GitHub のリポジトリ名
  repositoryName: 'blog',

  // ブログのタイトル
  blogTitle: 'Scrablog Sample',
  // ブログのヘッダーの文章 (空白にすると省略)
  headerText: 'Scrablog の動作サンプルと使い方です。',
  // ブログのフッターの文章 (空白にすると省略)
  footerText: 'Blog footer text sample',
  // ブログのフッターに "Generated by..." を表示するか
  showGeneratedBy: true,

  // 記事一覧から除外するタイトルのリスト
  excludeTitles: ['kamikoloss'],
  // 記事一覧をどのような形式で表示するか (BLOG_FULL or BLOG_CARD)
  indexType: indexTypes.BLOG_FULL,
  // 記事一覧で記事を1ページあたりいくつ表示するか
  articlesPerPage: 3,

  // 作成日時と更新日時のタイムゾーン
  timeZone: 'Asia/Tokyo',
  // 記事に作成日時を表示するか
  showCreated: true,
  // 記事に更新日時を表示するか
  showUpdated: true,
  // 記事の作成日時と更新日時の時間部分 (12:34) を表示するか
  showTime: true,
  // 特定の記事の下部に周辺記事 (1つ新しい/1つ古い) を表示するか
  showSurround: true,

  // サイドバーを表示するか
  showSideBar: true,
  // サイドバーの "最新の記事" で記事をいくつ表示するか
  sideBarRecentArticles: 5,
}

const colorConfig = {
  // 全体の文字色
  'text-base': '#111827',
  // 薄い文字色 (引用, フッターの文章)
  'text-light': '#6b7280',
  // リンクの文字色
  'text-link': '#3b82f6',
  // リンク切れの文字色
  'text-dead-link': '#ef4444',
  // 全体の背景色
  'bg-base': '#e5e7eb',
  // コンテンツ部分の背景色 (記事, ヘッダー)
  'bg-content': '#ffffff',
  // 記事内の薄い背景色 (引用, テーブルのヘッダー)
  'bg-light': '#f3f4f6',
}

export { appConfig, colorConfig }
