require 'xcodeproj'

project_path = "#{Dir.pwd}/src/mac/SamuwriteNative.xcodeproj"
project = Xcodeproj::Project.open(project_path)

file_group = project["SamuwriteNative"]
file_group.new_file("#{project.project_dir}/SamuwriteNative/dist")

project.save()