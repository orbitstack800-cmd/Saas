# Quick GitHub Workflow - Web Interface Only

Simple 5-step process using only GitHub's web interface.

## Step 1: Create Issue
1. Go to **Issues** tab
2. Click **"New Issue"**
3. Add title and description
4. Click **"Submit new issue"**
5. **Note the issue number** (e.g., #15)

## Step 2: Create Branch
1. Go to **Code** tab
2. Click branch dropdown (usually says "main")
3. Type new branch name: `015/your-feature-name`
4. Click **"Create branch"**

## Step 3: Make Changes
1. Navigate to files you want to edit
2. Click **pencil icon** (Edit file)
3. Make your changes
4. Scroll down to **"Commit changes"**
5. Write commit message: `feat: add new feature (#015)`
6. Select **"Commit directly to branch"**
7. Click **"Commit changes"**

## Step 4: Create Pull Request
1. GitHub shows **"Compare & pull request"** banner
2. Click the banner
3. Add title: `Add new feature (#015)`
4. Add description mentioning `Closes #015`
5. Click **"Create pull request"**

## Step 5: Merge
1. Wait for any required reviews
2. Click **"Merge pull request"**
3. Choose **"Squash and merge"**
4. Click **"Confirm squash and merge"**
5. Click **"Delete branch"** to clean up

## Branch Naming Format
```
{issue-number}/{description-with-hyphens}
```

**Examples:**
- `001/add-login-page`
- `015/fix-button-styling`
- `023/update-readme-docs`

## Quick Tips
- Always create issue first
- Use issue number in branch name
- Reference issue in commit messages
- Include `Closes #123` in PR description
- Delete branches after merging
