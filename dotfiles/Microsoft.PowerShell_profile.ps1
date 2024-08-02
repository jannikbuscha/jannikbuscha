cls
cp $HOME\.config\starship.toml \\wsl.localhost\Ubuntu\home\jannik\.config
Invoke-Expression (&starship init powershell)
Import-Module -Name Terminal-Icons
