# Angular 19 Migration TODO

## Phase 1: Preparation (In Progress)
- [x] Backup project to `backup-angular14`
- [x] Switch to Node.js 22 via nvm (`nvm use 22`)
- [x] Verify versions: Node 22.11.2, Angular CLI local 14.2.13
- [x] Install global Angular CLI 19: `npm install -g @angular/cli@19`
- [ ] Run `ng update @angular/cli@19 @angular/core@19` (stalled/failed, package.json unchanged; plan incremental)
- [x] Clean install: `rm -rf node_modules package-lock.json && npm install` (executed)
- [ ] Update peer deps (e.g., @angular/cdk ^19)

## Phase 2: Breaking Changes
- [ ] Migrate karma.conf.js -> Vitest (if not auto)
- [ ] Update tsconfigs (stricter, es2022)
- [ ] Review polyfills.ts, i18n
- [ ] Optional: Standalone migration

## Phase 3: Testing
- [ ] `ng lint --fix`
- [ ] `ng build`
- [ ] `ng test`
- [ ] `ng serve`

**Status**: ng update in progress (long spinner normal for 14->19).

