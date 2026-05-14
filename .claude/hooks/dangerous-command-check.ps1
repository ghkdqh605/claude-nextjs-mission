# PreToolUse Hook: Block dangerous Bash commands before execution
param()

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$OutputEncoding = [System.Text.Encoding]::UTF8

try {
    $data = [Console]::In.ReadToEnd() | ConvertFrom-Json
} catch { exit 0 }

$command = $data.tool_input.command
if (-not $command) { exit 0 }

$patterns = @(
    @{ regex = 'rm\s+(-\w*r\w*f|-\w*f\w*r|--recursive.*--force|--force.*--recursive)\b'; msg = 'rm -rf' },
    @{ regex = 'git\s+push\s+.*?(--force\b|-f\b)(?!-with-lease)'; msg = 'git push --force' },
    @{ regex = 'git\s+reset\s+--hard'; msg = 'git reset --hard' },
    @{ regex = 'git\s+clean\s+(-\w*f|-f\w*)'; msg = 'git clean -f' },
    @{ regex = 'git\s+branch\s+(-D\b|--delete\s+--force)\s+(main|master)\b'; msg = 'git branch -D main/master' },
    @{ regex = '(?i)\bDROP\s+(TABLE|DATABASE|SCHEMA)\b'; msg = 'DROP TABLE/DATABASE' },
    @{ regex = 'chmod\s+(-R\s+777|777\s+-R)'; msg = 'chmod -R 777' },
    @{ regex = '\bdd\b.*\bof=/dev/'; msg = 'dd of=/dev/' },
    @{ regex = '\bmkfs\b'; msg = 'mkfs' },
    @{ regex = ':\(\)\s*\{.*:\s*\|.*:\s*&\s*\}'; msg = 'Fork bomb' }
)

foreach ($item in $patterns) {
    if ($command -match $item.regex) {
        Write-Error "Blocked: $($item.msg) - This command cannot be executed.`nCommand: $command" -ErrorAction Continue
        exit 2
    }
}

exit 0
