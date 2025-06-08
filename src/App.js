import './App.css';

function App() {
  return (
    <div className="modal-bg">
      <div className="modal-dialog">
        <div className="modal-header">
          <h1 className="modal-title">Save</h1>
        </div>
        <div className="modal-body">
          <p className="modal-body-text">
            Do you wish to do the things below:<br />
            <span className="modal-bullet">•</span> Update 1 task.
          </p>
          <div className="modal-changelog-list">
            <div className="modal-changelog added">
              <img src={require('./assets/icons/add-circle.svg').default} alt="Added" className="changelog-icon" />
              <div className="changelog-content">
                <div class="changelog-title">UX-43 Description added by Dan Vornovitskii via WBS Gantt Chart</div>
                <div className="changelog-desc">Standardize our product onboarding process.<br /><br />Create an eye-catching and easy-to-understand onboarding experience using interactive demos (arcade) and appealing illustrations designed by BT.<br /><br />Promote all Ricksoft products on every "Get Started" page.</div>
              </div>
            </div>
            <div className="modal-changelog removed">
              <img src={require('./assets/icons/cross-circle.svg').default} alt="Removed" className="changelog-icon" />
              <div className="changelog-content">
                <div className="changelog-title">UX-43 Assignee removed by Dan Vornovitskii via Jira</div>
                <div class="changelog-desc">Khairul Danial</div>
              </div>
            </div>
            <div className="modal-changelog changed">
              <img src={require('./assets/icons/arrow-right-circle.svg').default} alt="Changed" className="changelog-icon" />
              <div className="changelog-content">
                <div className="changelog-title">UX-43 Name changed by Dan Vornovitskii via Jira</div>
                <div className="changelog-desc">test issue → test issue test</div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-cancel">Cancel</button>
          <button className="btn btn-save">Save</button>
        </div>
      </div>
    </div>
  );
}

export default App;
