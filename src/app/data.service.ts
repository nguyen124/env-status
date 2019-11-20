import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getDeploymentRecords() {
    return this.deploymentRecordsMock;
  }

  getEnvDetails() {
    return this.envDetailsMock;
  }

  deploymentRecordsMock = {

  }

  /**need to clarify the data structure to be able to display correctly */
  envDetailsMock = {
    "env1": {
      "environment_type": "env1",
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
        "env1-message1_ip": "1.1.1.1",
        "env1-message1_port": 12345,
        "env1-svcapp1_ip": "1.1.1.1",
        "env1-svcapp1_port": 12345,
        "env1-rptwebedw1_ip": "1.1.1.1",
        "env1-rptwebedw1_port": 12345,
        "env1-batch2_ip": "1.1.1.1",
        "env1-batch2_port": 12345,
        "env1-batch1_ip": "1.1.1.1",
        "env1-batch1_port": 12345,
        "env1-rptappcod1_ip": "1.1.1.1",
        "env1-rptappcod1_port": 12345,
        "env1-web2_ip": "1.1.1.1",
        "env1-web2_port": 12345,
        "env1-cache2_ip": "1.1.1.1",
        "env1-cache2_port": 12345,
        "env1-svcbatch2_ip": "1.1.1.1",
        "env1-svcbatch2_port": 12345,
        "env1-rptappcod2_ip": "1.1.1.1",
        "env1-rptappcod2_port": 12345,
        "env1-web1_ip": "1.1.1.1",
        "env1-web1_port": 12345,
        "env1-cache1_ip": "1.1.1.1",
        "env1-cache1_port": 12345,
        "env1-rptappedw1_ip": "1.1.1.1",
        "env1-rptappedw1_port": 12345,
        "env1-svcapp2_ip": "1.1.1.1",
        "env1-svcapp2_port": 12345,
        "env1-svcdoc1_ip": "1.1.1.1",
        "env1-svcdoc1_port": 12345,
        "env1-stubs_ip": "1.1.1.1",
        "env1-stubs_port": 12345,
        "env1-app2_ip": "1.1.1.1",
        "env1-app2_port": 12345,
        "env1-rptwebcod1_ip": "1.1.1.1",
        "env1-rptwebcod1_port": 12345,
        "env1-rptldapedw1_ip": "1.1.1.1",
        "env1-rptldapedw1_port": 12345,
        "env1-dbclient1_ip": "1.1.1.1",
        "env1-dbclient1_port": 12345,
        "env1-rptappedw2_ip": "1.1.1.1",
        "env1-rptappedw2_port": 12345,
        "env1-cms1_ip": "1.1.1.1",
        "env1-cms1_port": 12345,
        "env1-rptldapcod1_ip": "1.1.1.1",
        "env1-rptldapcod1_port": 12345,
        "env1-schedule1_ip": "1.1.1.1",
        "env1-schedule1_port": 12345,
        "env1-svcbatch1_ip": "1.1.1.1",
        "env1-svcbatch1_port": 12345,
        "env1-svcdoc2_ip": "1.1.1.1",
        "env1-svcdoc2_port": 12345,
        "env1-app1_ip": "1.1.1.1",
        "env1-app1_port": 12345
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
    },
    "env2": {
      "environment_type": "env2",
      "oracle_connection": {
        "cod_tds": {
          "primary": {
            "node1": {
              "host": "test-test-test.gov.amazonaws.com",
              "service": "txn",
              "port": "1234",
              "ip": ""
            }
          }
        },
        "cod_rds": {
          "primary": {
            "node1": {
              "host": "test-test-test.gov.amazonaws.com",
              "ip": "1.1.1.1",
              "port": "1234",
              "service": "rpt"
            }
          }
        }
      },
      "api_port": "1234",
      "webserver_host": "abc.123.456",
      "sql_host": "abc.123.456",
      "props": {
        "cod": {
          "config": {
            "di_node": {
              "mq_host_2": "abc.123.456",
              "mq_host_1": "abc.123.456",
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
        "env2-svcbatch1_ip": "0.0.0.0",
        "env2-svcbatch1_port": 23456,
        "env2-rptappedw1_ip": "0.0.0.0",
        "env2-rptappedw1_port": 23456,
        "env2-rptwebedw1_ip": "0.0.0.0",
        "env2-rptwebedw1_port": 23456,
        "env2-dbclient1_ip": "0.0.0.0",
        "env2-dbclient1_port": 23456,
        "env2-cms1_ip": "0.0.0.0",
        "env2-cms1_port": 23456,
        "env2-rptappcod1_ip": "0.0.0.0",
        "env2-rptappcod1_port": 23456,
        "env2-rptwebcod1_ip": "0.0.0.0",
        "env2-rptwebcod1_port": 23456,
        "env2-svcapp2_ip": "0.0.0.0",
        "env2-svcapp2_port": 23456,
        "env2-rptappedw2_ip": "0.0.0.0",
        "env2-rptappedw2_port": 23456,
        "env2-rptldapedw1_ip": "0.0.0.0",
        "env2-rptldapedw1_port": 23456,
        "env2-schedule1_ip": "0.0.0.0",
        "env2-schedule1_port": 23456,
        "env2-svcdoc2_ip": "0.0.0.0",
        "env2-svcdoc2_port": 23456,
        "env2-web2_ip": "0.0.0.0",
        "env2-web2_port": 23456,
        "env2-batch2_ip": "0.0.0.0",
        "env2-batch2_port": 23456,
        "env2-cache2_ip": "0.0.0.0",
        "env2-cache2_port": 23456,
        "env2-svcapp1_ip": "0.0.0.0",
        "env2-svcapp1_port": 23456,
        "env2-rptappcod2_ip": "0.0.0.0",
        "env2-rptappcod2_port": 23456,
        "env2-web1_ip": "0.0.0.0",
        "env2-web1_port": 23456,
        "env2-cache1_ip": "0.0.0.0",
        "env2-cache1_port": 23456,
        "env2-app1_ip": "0.0.0.0",
        "env2-app1_port": 23456,
        "env2-message1_ip": "0.0.0.0",
        "env2-message1_port": 23456,
        "env2-app2_ip": "0.0.0.0",
        "env2-app2_port": 23456,
        "env2-stubs_ip": "0.0.0.0",
        "env2-stubs_port": 23456,
        "env2-batch1_ip": "0.0.0.0",
        "env2-batch1_port": 23456,
        "env2-svcbatch2_ip": "0.0.0.0",
        "env2-svcbatch2_port": 23456,
        "env2-rptldapcod1_ip": "0.0.0.0",
        "env2-rptldapcod1_port": 23456,
        "env2-svcdoc1_ip": "0.0.0.0",
        "env2-svcdoc1_port": 23456
      },
      "server_svc_ats_https_ip": "0.0.0.0",
      "server_svc_ats_https_port": 98765,
      "server_rpt_cog_https_ip": "0.0.0.0",
      "server_rpt_cog_https_port": 98765,
      "server_app_ats_https_ip": "0.0.0.0",
      "server_app_ats_https_port": 98765,
      "server_app_adm_https_ip": "0.0.0.0",
      "server_app_adm_https_port": 98765,
      "server_app_adm_http_ip": "0.0.0.0",
      "server_app_adm_http_port": 98765,
      "server_app_ats_cluster_ip": "0.0.0.0",
      "server_app_ats_cluster_port": 98765,
      "server_svc_crw_http_ip": "0.0.0.0",
      "server_svc_crw_http_port": 98765,
      "server_app_cod_https_ip": "0.0.0.0",
      "server_app_cod_https_port": 98765,
      "server_svc_ctrl_cluster_ip": "0.0.0.0",
      "server_svc_ctrl_cluster_port": 98765,
      "server_app_cod_cluster_ip": "0.0.0.0",
      "server_app_cod_cluster_port": 98765,
      "server_svc_ctrl_https_ip": "0.0.0.0",
      "server_svc_ctrl_https_port": 98765,
      "server_app_sl_https_ip": "0.0.0.0",
      "server_app_sl_https_port": 98765,
      "server_app_sl_https_url": "https://web-tester.com",
      "server_svc_ats_cluster_ip": "0.0.0.0",
      "server_svc_ats_cluster_port": 98765,
      "server_svc_cc_https_ip": "0.0.0.0",
      "server_svc_cc_https_port": 98765,
      "server_svc_cc_cluster_ip": "0.0.0.0",
      "server_svc_cc_cluster_port": 98765,
      "server_svc_crw_cluster_ip": "0.0.0.0",
      "server_svc_crw_cluster_port": 98765,
      "server_svc_ws_cluster_ip": "0.0.0.0",
      "server_svc_ws_cluster_port": 98765,
      "server_svc_cc_https_url": "https://web-tester.com",
      "server_svc_crw_https_ip": "0.0.0.0",
      "server_svc_crw_https_port": 98765,
      "server_app_sl_cluster_ip": "0.0.0.0",
      "server_app_sl_cluster_port": 98765,
      "server_svc_ws_https_ip": "0.0.0.0",
      "server_svc_ws_https_port": 98765,
      "server_console_ip": "0.0.0.0",
      "server_console_port": 98765,
      "server_console_url": "https://web-tester.com",
      "server_app_cod_https_url": "https://web-tester.com",
      "server_svc_ws_https_url": "https://web-tester.com"
    }
  };

}
