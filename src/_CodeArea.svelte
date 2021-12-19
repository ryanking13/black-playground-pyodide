<script>
	import Editor from "./Editor.svelte";
</script>

<main>
	<div>
        <div class="flex flex-col h-screen">
          <div class="flex flex-1 flex-col">
            <div class="flex flex-1 min-h-0">
              <!-- <Sidebar
                version={this.state.version}
                versions={this.state.versions}
                options={this.state.options}
                visible={this.state.isSidebarVisible}
                onChange={this.handleOptionsUpdate}
              /> -->

              <div class="flex flex-1">
                <div class="flex flex-1 relative">
                  <Editor/>
                </div>
                <div class="flex flex-1 relative">
                  <!-- {this.state.isLoading ? (
                    <div className="flex items-center justify-center w-full ace-tomorrow-night">
                      <Spinner />
                    </div>
                  ) : ( -->
                    <!-- <Editor value={this.state.formatted} readOnly={true} /> -->
					<Editor/>
                  <!-- )} -->
                </div>
              </div>
            </div>
<!-- 
            <div className="flex justify-between content-center items-center p-4">
              <button
                className={classNames('text-sm inline-flex items-center', {
                  'text-black': this.state.isSidebarVisible,
                  'hover:text-grey-dark': this.state.isSidebarVisible,
                  'text-grey-dark': !this.state.isSidebarVisible,
                  'hover:text-black': !this.state.isSidebarVisible
                })}
                onClick={this.handleToggleSidebar}>
                <Icon icon="cog" />
              </button>
              <div className="flex text-right">
                <div className="flex text-right">
                  <Link href={this.state.issueLink}>
                    <a className="bg-transparent text-xs py-1 text-black font-bold no-underline hover:underline">
                      Report issue
                    </a>
                  </Link>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
</main>

<style>
	main {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
