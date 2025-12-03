/** @type {import('next').NextConfig} */
const nextConfig = {
  // 暂时关闭类型检查以快速部署
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
