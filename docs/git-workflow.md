# CacheSense Git Workflow

## Repository Setup

1. Initialize the repo locally with `git init`.
2. Keep `.gitignore` committed so heavy and secret files stay out of GitHub.
3. Use `main` as the stable branch.

## Branch Strategy

Use short-lived feature branches and merge them back into `main` when complete.

### Week 1

- `feature/core-proxy` for the Proxy wrapper logic.
- `feature/analytics-heuristics` for hit ratios and cache-stampede detection.

### Week 2

- `feature/embedded-dashboard` for the internal stats endpoint and chart UI.
- `feature/simulation-testing` for load simulation and alert validation.

## Daily Workflow

1. Check out the feature branch you are working on.
2. Make focused commits with descriptive messages.
3. Push the branch to GitHub frequently.
4. Merge into `main` only after the feature is stable.