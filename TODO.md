# Angular 19 Migration TODO

## Phase 1: Preparation (In Progress)\n- [x] Backup project to `backup-angular14`\n- [x] Switch to Node.js 22 via nvm (`nvm use 22`)\n- [x] Verify versions: Node 22.11.2, Angular CLI local 14.2.13\n- [x] Install global Angular CLI 19: `npm install -g @angular/cli@19`\n- [ ] Run `ng update @angular/cli@19 @angular/core@19`\n- [ ] Clean install: `rm -rf node_modules package-lock.json && npm install`\n- [ ] Update peer deps (e.g., @angular/cdk ^19)

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

