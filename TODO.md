# Angular 19 Migration TODO

- [ ] Run `ng update @angular/cli@19 @angular/core@19` ✅ (Repo clean, executing)

## Phase 2: Breaking Changes
- [ ] Migrate karma.conf.js -> Vitest
- [ ] Update tsconfigs (stricter templates, es2022)
- [ ] Review polyfills.ts, i18n loader
- [ ] Optional: Migrate to standalone components

## Phase 3: Testing & Fixes
- [ ] `ng lint --fix`
- [ ] `ng build --prod`
- [ ] `ng test` (Vitest)
- [ ] `ng serve` + test all routes/pages
- [ ] Fix third-party compat (ngx-translate, ng-bootstrap, etc.)

**Next: Global CLI install & ng update**

