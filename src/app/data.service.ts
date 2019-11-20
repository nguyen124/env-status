import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getEnvDetails() {
    return this.envDetailsMock;
  }
  
  envDetailsMock = {
    "environment_type": "abc",
    "oracle_connection": {
      "cod_tds": {
        "primary": {
          "node1": {
            "host": "test.amazonaws.com",
            "service": "txn",
            "port": "1000",
            "ip": ""
          }
        }
      },
      "cod_rds": {
        "primary": {
          "node1": {
            "host": "test.amazonaws.com",
            "ip": "1.1.1.1",
            "port": "1000",
            "service": "rpt"
          }
        }
      }
    },
    "webserver_host": "1.1.2.3",
    "api_port": "12345",
    "sql_host": "1.1.2.3",
    "props": {
      "cod": {
        "config": {
          "di_node": {
            "mq_host_2": "foo.bar.baz.quux",
            "mq_host_1": "foo.bar.baz.quux",
            "mq_port_2": "1234",
            "mq_port_1": "1234"
          }
        }
      }
    },
    "schemaprefix": {
      "sl": "cod",
      "cod": "cod",
      "ats": "ats"
    },
    "schemas": {
      "oracle": {
        "sl": "SL{{environment_name|upper}}",
        "cod": "COD{{environment_name|upper}}"
      }
    },
    "queue_manager": "CODT1",
    "host_connections": {
      "vivo-message1_ip": "1.1.1.1",
      "vivo-message1_port": 12345,
      "vivo-svcapp1_ip": "1.1.1.1",
      "vivo-svcapp1_port": 12345,
      "vivo-rptwebedw1_ip": "1.1.1.1",
      "vivo-rptwebedw1_port": 12345,
      "vivo-batch2_ip": "1.1.1.1",
      "vivo-batch2_port": 12345,
      "vivo-batch1_ip": "1.1.1.1",
      "vivo-batch1_port": 12345,
      "vivo-rptappcod1_ip": "1.1.1.1",
      "vivo-rptappcod1_port": 12345,
      "vivo-web2_ip": "1.1.1.1",
      "vivo-web2_port": 12345,
      "vivo-cache2_ip": "1.1.1.1",
      "vivo-cache2_port": 12345,
      "vivo-svcbatch2_ip": "1.1.1.1",
      "vivo-svcbatch2_port": 12345,
      "vivo-rptappcod2_ip": "1.1.1.1",
      "vivo-rptappcod2_port": 12345,
      "vivo-web1_ip": "1.1.1.1",
      "vivo-web1_port": 12345,
      "vivo-cache1_ip": "1.1.1.1",
      "vivo-cache1_port": 12345,
      "vivo-rptappedw1_ip": "1.1.1.1",
      "vivo-rptappedw1_port": 12345,
      "vivo-svcapp2_ip": "1.1.1.1",
      "vivo-svcapp2_port": 12345,
      "vivo-svcdoc1_ip": "1.1.1.1",
      "vivo-svcdoc1_port": 12345,
      "vivo-stubs_ip": "1.1.1.1",
      "vivo-stubs_port": 12345,
      "vivo-app2_ip": "1.1.1.1",
      "vivo-app2_port": 12345,
      "vivo-rptwebcod1_ip": "1.1.1.1",
      "vivo-rptwebcod1_port": 12345,
      "vivo-rptldapedw1_ip": "1.1.1.1",
      "vivo-rptldapedw1_port": 12345,
      "vivo-dbclient1_ip": "1.1.1.1",
      "vivo-dbclient1_port": 12345,
      "vivo-rptappedw2_ip": "1.1.1.1",
      "vivo-rptappedw2_port": 12345,
      "vivo-cms1_ip": "1.1.1.1",
      "vivo-cms1_port": 12345,
      "vivo-rptldapcod1_ip": "1.1.1.1",
      "vivo-rptldapcod1_port": 12345,
      "vivo-schedule1_ip": "1.1.1.1",
      "vivo-schedule1_port": 12345,
      "vivo-svcbatch1_ip": "1.1.1.1",
      "vivo-svcbatch1_port": 12345,
      "vivo-svcdoc2_ip": "1.1.1.1",
      "vivo-svcdoc2_port": 12345,
      "vivo-app1_ip": "1.1.1.1",
      "vivo-app1_port": 12345
    },
    "server_rpt_cog_https_ip": "1.1.1.1",
    "server_rpt_cog_https_port": 12345,
    "server_app_sl_https_ip": "1.1.1.1",
    "server_app_sl_https_port": 12345,
    "server_app_sl_cluster_ip": "1.1.1.1",
    "server_app_sl_cluster_port": 12345,
    "server_svc_ats_https_ip": "1.1.1.1",
    "server_svc_ats_https_port": 12345,
    "server_svc_ctrl_https_ip": "1.1.1.1",
    "server_svc_ctrl_https_port": 12345,
    "server_svc_crw_cluster_ip": "1.1.1.1",
    "server_svc_crw_cluster_port": 12345,
    "server_app_ats_https_ip": "1.1.1.1",
    "server_app_ats_https_port": 12345,
    "server_svc_ats_cluster_ip": "1.1.1.1",
    "server_svc_ats_cluster_port": 12345,
    "server_svc_crw_https_ip": "1.1.1.1",
    "server_svc_crw_https_port": 12345,
    "server_svc_cc_cluster_ip": "1.1.1.1",
    "server_svc_cc_cluster_port": 12345,
    "server_app_adm_http_ip": "1.1.1.1",
    "server_app_adm_http_port": 12345,
    "server_app_cod_cluster_ip": "1.1.1.1",
    "server_app_cod_cluster_port": 12345,
    "server_app_adm_https_ip": "1.1.1.1",
    "server_app_adm_https_port": 12345,
    "server_app_ats_cluster_ip": "1.1.1.1",
    "server_app_ats_cluster_port": 12345,
    "server_svc_ctrl_cluster_ip": "1.1.1.1",
    "server_svc_ctrl_cluster_port": 12345,
    "server_svc_crw_http_ip": "1.1.1.1",
    "server_svc_crw_http_port": 12345,
    "server_svc_ws_cluster_ip": "1.1.1.1",
    "server_svc_ws_cluster_port": 12345,
    "server_svc_ws_https_ip": "1.1.1.1",
    "server_svc_ws_https_port": 12345,
    "server_app_cod_https_ip": "1.1.1.1",
    "server_app_cod_https_port": 12345,
    "server_svc_cc_https_ip": "1.1.1.1",
    "server_svc_cc_https_port": 12345,
    "server_svc_cc_https_url": "https://test-test.com",
    "server_console_ip": "1.1.1.1",
    "server_console_port": 12345,
    "server_console_url": "https://test-test.com",
    "server_svc_ws_https_url": "https://test-test.com",
    "server_app_sl_https_url": "https://test-test.com",
    "server_app_cod_https_url": "https://test-test.com"
  }
}
