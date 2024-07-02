require 'FileUtils'

current_dir = Dir.pwd
dist_path = "#{current_dir}/apps/web/dist"
mac_dist_path = "#{current_dir}/apps/mac/SamuwriteNative/dist"

FileUtils.rm_rf(mac_dist_path)
FileUtils.copy_entry dist_path, mac_dist_path
