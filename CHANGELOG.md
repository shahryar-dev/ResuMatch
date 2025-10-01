# Changelog
All notable changes to this project will be documented in this file.

## [0.4.0] - 2025-10-01
### Added
- Professional header + sidebar application shell
- Reusable `UnderConstruction` component for in-flight features

### Changed
- Routed placeholder pages (results, billing, jobs, notifications, profile, subscriptions) to use the shared component
- Introduced `prop-types` dependency to provide runtime checks for shared UI components
- Updated documentation to reflect the new layout and placeholders

## [0.3.0] - 2025-10-01
### Changed
- Restructured repository into an npm workspace with the frontend in `apps/web`
- Added web app-specific package manifest/config and proxied root scripts to `@resumatch/web`
- Updated CI workflow and documentation to reference the new `apps/web` build output

## [0.2.0] - 2025-09-29
### Added
- CSS scaffold: global `src/styles/base.css` and page-level `*.module.css`
- Wired style imports across pages/components

## [0.1.0] - 2025-09-29
### Added
- Frontend scaffold (routing, forms, pages)
- Full repo scaffold (frontend + docs)
- CI workflow, issue & PR templates
- Apache-2.0 license and NOTICE
