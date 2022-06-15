default: help

# add page
new-page:
	node build/new-page.js $(filter-out $@,$(MAKECMDGOALS))
gen-router:
	node build/gen-router.js $(filter-out $@,$(MAKECMDGOALS))
help:
	@echo "   \033[35mmake gen-router <target-file> [页面标题]<icon>\\033[0m\t---  向router中添加页面. 例如 'make gen-router order 订单管理 el-icon-setting'"
	@echo "   \033[35mmake new-page <target-file> <page-name>[页面标题]\\033[0m\t---  向pages中添加页面. 例如 'make new-page order card 订单管理"