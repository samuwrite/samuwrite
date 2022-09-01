require 'FileUtils'

current_dir = Dir.pwd
dist_path = "#{current_dir}/dist"
mac_dist_path = "#{current_dir}/src/mac/SamuwriteNative/dist"

FileUtils.rm_rf(mac_dist_path)
FileUtils.copy_entry dist_path, mac_dist_path
