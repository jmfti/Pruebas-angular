import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of, from} from 'rxjs';

@Injectable()
export class GenericHttpInterceptor implements HttpInterceptor {

  log = "03/22 08:51:01 INFO   :.main: *************** RSVP Agent started ***************\n" +
    " 02 \n" +
    "03/22 08:51:01 INFO   :...locate_configFile: Specified configuration file: /u/user10/rsvpd1.conf\n" +
    "03/22 08:51:01 INFO   :.main: Using log level 511\n" +
    "03/22 08:51:01 INFO   :..settcpimage: Get TCP images rc - EDC8112I Operation not supported on socket.\n" +
    " 03 \n" +
    "03/22 08:51:01 INFO   :..settcpimage: Associate with TCP/IP image name = TCPCS\n" +
    "03/22 08:51:02 INFO   :..reg_process: registering process with the system\n" +
    "03/22 08:51:02 INFO   :..reg_process: attempt OS/390 registration\n" +
    "03/22 08:51:02 INFO   :..reg_process: return from registration rc=0\n" +
    " 04 \n" +
    "03/22 08:51:06 TRACE  :...read_physical_netif: Home list entries returned = 7\n" +
    "03/22 08:51:06 INFO   :...read_physical_netif: index #0, interface VLINK1 has address 129.1.1.1, ifidx 0\n" +
    "03/22 08:51:06 INFO   :...read_physical_netif: index #1, interface TR1 has address 9.37.65.139, ifidx 1\n" +
    "03/22 08:51:06 INFO   :...read_physical_netif: index #2, interface LINK11 has address 9.67.100.1, ifidx 2\n" +
    "03/22 08:51:06 INFO   :...read_physical_netif: index #3, interface LINK12 has address 9.67.101.1, ifidx 3\n" +
    "03/22 08:51:06 INFO   :...read_physical_netif: index #4, interface CTCD0 has address 9.67.116.98, ifidx 4\n" +
    "03/22 08:51:06 INFO   :...read_physical_netif: index #5, interface CTCD2 has address 9.67.117.98, ifidx 5\n" +
    "03/22 08:51:06 INFO   :...read_physical_netif: index #6, interface LOOPBACK has address 127.0.0.1, ifidx 0\n" +
    "03/22 08:51:06 INFO   :....mailslot_create: creating mailslot for timer\n" +
    "03/22 08:51:06 INFO   :...mailbox_register: mailbox allocated for timer\n" +
    " 05 \n" +
    "03/22 08:51:06 INFO   :.....mailslot_create: creating mailslot for RSVP\n" +
    "03/22 08:51:06 INFO   :....mailbox_register: mailbox allocated for rsvp\n" +
    "03/22 08:51:06 INFO   :.....mailslot_create: creating mailslot for RSVP via UDP\n" +
    " 06 \n" +
    "03/22 08:51:06 WARNING:.....mailslot_create: setsockopt(MCAST_ADD) failed - EDC8116I Address not available.\n" +
    "03/22 08:51:06 INFO   :....mailbox_register: mailbox allocated for rsvp-udp\n" +
    "03/22 08:51:06 TRACE  :..entity_initialize: interface 129.1.1.1, entity for rsvp allocated and initialized\n" +
    "03/22 08:51:06 INFO   :.....mailslot_create: creating mailslot for RSVP\n" +
    "03/22 08:51:06 INFO   :....mailbox_register: mailbox allocated for rsvp\n" +
    "03/22 08:51:06 INFO   :.....mailslot_create: creating mailslot for RSVP via UDP\n" +
    "03/22 08:51:06 WARNING:.....mailslot_create: setsockopt(MCAST_ADD) failed - EDC8116I Address not available.\n" +
    "03/22 08:51:06 INFO   :....mailbox_register: mailbox allocated for rsvp-udp\n" +
    "03/22 08:51:06 TRACE  :..entity_initialize: interface 9.37.65.139, entity for rsvp allocated and \n" +
    "initialized\n" +
    "03/22 08:51:06 INFO   :.....mailslot_create: creating mailslot for RSVP\n" +
    "03/22 08:51:06 INFO   :....mailbox_register: mailbox allocated for rsvp\n" +
    "03/22 08:51:06 INFO   :.....mailslot_create: creating mailslot for RSVP via UDP\n" +
    "03/22 08:51:06 WARNING:.....mailslot_create: setsockopt(MCAST_ADD) failed - EDC8116I Address not available.\n" +
    "03/22 08:51:06 INFO   :....mailbox_register: mailbox allocated for rsvp-udp\n" +
    "03/22 08:51:06 TRACE  :..entity_initialize: interface 9.67.100.1, entity for rsvp allocated and initialized\n" +
    "03/22 08:51:06 INFO   :.....mailslot_create: creating mailslot for RSVP\n" +
    "03/22 08:51:06 INFO   :....mailbox_register: mailbox allocated for rsvp\n" +
    "03/22 08:51:06 INFO   :.....mailslot_create: creating mailslot for RSVP via UDP\n" +
    "03/22 08:51:06 WARNING:.....mailslot_create: setsockopt(MCAST_ADD) failed - EDC8116I Address not available.\n" +
    "03/22 08:51:06 INFO   :....mailbox_register: mailbox allocated for rsvp-udp\n" +
    "03/22 08:51:06 TRACE  :..entity_initialize: interface 9.67.101.1, entity for rsvp allocated and initialized\n" +
    "03/22 08:51:06 INFO   :.....mailslot_create: creating mailslot for RSVP\n" +
    "03/22 08:51:06 INFO   :....mailbox_register: mailbox allocated for rsvp\n" +
    "03/22 08:51:06 INFO   :.....mailslot_create: creating mailslot for RSVP via UDP\n" +
    "03/22 08:51:06 INFO   :....mailbox_register: mailbox allocated for rsvp-udp\n" +
    "03/22 08:51:06 TRACE  :..entity_initialize: interface 9.67.116.98, entity for rsvp allocated and \n" +
    "initialized\n" +
    "03/22 08:51:06 INFO   :.....mailslot_create: creating mailslot for RSVP\n" +
    "03/22 08:51:06 INFO   :....mailbox_register: mailbox allocated for rsvp\n" +
    "03/22 08:51:06 INFO   :.....mailslot_create: creating mailslot for RSVP via UDP\n" +
    "03/22 08:51:06 INFO   :....mailbox_register: mailbox allocated for rsvp-udp\n" +
    "03/22 08:51:06 TRACE  :..entity_initialize: interface 9.67.117.98, entity for rsvp allocated and \n" +
    "initialized\n" +
    "03/22 08:51:06 INFO   :.....mailslot_create: creating mailslot for RSVP\n" +
    "03/22 08:51:06 INFO   :....mailbox_register: mailbox allocated for rsvp\n" +
    "03/22 08:51:06 INFO   :.....mailslot_create: creating mailslot for RSVP via UDP\n" +
    "03/22 08:51:06 INFO   :....mailbox_register: mailbox allocated for rsvp-udp\n" +
    "03/22 08:51:06 TRACE  :..entity_initialize: interface 127.0.0.1, entity for rsvp allocated and initialized\n" +
    "03/22 08:51:06 INFO   :......mailslot_create: creating socket for querying route\n" +
    "03/22 08:51:06 INFO   :.....mailbox_register: no mailbox necessary for forward\n" +
    "03/22 08:51:06 INFO   :......mailslot_create: creating mailslot for route engine - informational socket\n" +
    "03/22 08:51:06 TRACE  :......mailslot_create: ready to accept informational socket connection\n" +
    "03/22 08:51:11 INFO   :.....mailbox_register: mailbox allocated for route\n" +
    "03/22 08:51:11 INFO   :.....mailslot_create: creating socket for traffic control module\n" +
    "03/22 08:51:11 INFO   :....mailbox_register: no mailbox necessary for traffic-control\n" +
    "03/22 08:51:11 INFO   :....mailslot_create: creating mailslot for RSVP client API\n" +
    "03/22 08:51:11 INFO   :...mailbox_register: mailbox allocated for rsvp-api\n" +
    "03/22 08:51:11 INFO   :...mailslot_create: creating mailslot for terminate\n" +
    "03/22 08:51:11 INFO   :..mailbox_register: mailbox allocated for terminate\n" +
    "03/22 08:51:11 INFO   :...mailslot_create: creating mailslot for dump\n" +
    "03/22 08:51:11 INFO   :..mailbox_register: mailbox allocated for dump\n" +
    "03/22 08:51:11 INFO   :...mailslot_create: creating mailslot for (broken) pipe\n" +
    "03/22 08:51:11 INFO   :..mailbox_register: mailbox allocated for pipe\n" +
    " 07 \n" +
    "03/22 08:51:11 INFO   :.main: rsvpd initialization complete\n" +
    " 08 \n" +
    "03/22 08:52:50 INFO   :......rsvp_api_open: accepted a new connection for rapi\n" +
    "03/22 08:52:50 INFO   :.......mailbox_register: mailbox allocated for mailbox\n" +
    "03/22 08:52:50 TRACE  :......rsvp_event_mapSession: Session=9.67.116.99:1047:6 does not exist\n" +
    " 09 \n" +
    "03/22 08:52:50 EVENT  :.....api_reader: api request SESSION\n" +
    " 10 \n" +
    "03/22 08:52:50 TRACE  :......rsvp_event_establishSession: local node will send\n" +
    "03/22 08:52:50 INFO   :........router_forward_getOI: Ioctl to get route entry successful\n" +
    "03/22 08:52:50 TRACE  :........router_forward_getOI:         source address:   9.67.116.98\n" +
    "03/22 08:52:50 TRACE  :........router_forward_getOI:         out inf:   9.67.116.98\n" +
    "03/22 08:52:50 TRACE  :........router_forward_getOI:         gateway:   0.0.0.0\n" +
    "03/22 08:52:50 TRACE  :........router_forward_getOI:         route handle:   7f5251c8\n" +
    " 11 \n" +
    "03/22 08:52:50 TRACE  :.......event_establishSessionSend: found outgoing if=9.67.116.98 through \n" +
    "forward engine\n" +
    "03/22 08:52:50 TRACE  :......rsvp_event_mapSession: Session=9.67.116.99:1047:6 exists\n" +
    " 12 \n" +
    "03/22 08:52:50 EVENT  :.....api_reader: api request SENDER\n" +
    " 13 \n" +
    "03/22 08:52:50 INFO   :.......init_policyAPI: papi_debug:  Entering\n" +
    " \n" +
    "03/22 08:52:50 INFO   :.......init_policyAPI: papi_debug:  papiLogFunc = 98681F0 papiUserValue = 0\n" +
    " \n" +
    "03/22 08:52:50 INFO   :.......init_policyAPI: papi_debug:  Exiting\n" +
    " \n" +
    "03/22 08:52:50 INFO   :.......init_policyAPI: APIInitialize:  Entering\n" +
    " \n" +
    "03/22 08:52:50 INFO   :.......init_policyAPI: open_socket:  Entering\n" +
    " \n" +
    "03/22 08:52:50 INFO   :.......init_policyAPI: open_socket:  Exiting\n" +
    " \n" +
    "03/22 08:52:50 INFO   :.......init_policyAPI: APIInitialize:  ApiHandle = 98BDFB0,  connfd = 22\n" +
    " \n" +
    "03/22 08:52:50 INFO   :.......init_policyAPI: APIInitialize:  Exiting\n" +
    " \n" +
    "03/22 08:52:50 INFO   :.......init_policyAPI: RegisterWithPolicyAPI:  Entering\n" +
    "03/22 08:52:50 INFO   :.......init_policyAPI: RegisterWithPolicyAPI:  Writing to socket = 22\n" +
    " \n" +
    "03/22 08:52:50 INFO   :.......init_policyAPI: ReadBuffer:  Entering\n" +
    " \n" +
    "03/22 08:52:51 INFO   :.......init_policyAPI: ReadBuffer:  Exiting\n" +
    " \n" +
    "03/22 08:52:51 INFO   :.......init_policyAPI: RegisterWithPolicyAPI:  Exiting\n" +
    "03/22 08:52:51 INFO   :.......init_policyAPI: Policy API initialized\n" +
    "03/22 08:52:51 INFO   :......rpapi_getPolicyData: RSVPFindActionName:  Entering\n" +
    " \n" +
    "03/22 08:52:51 INFO   :......rpapi_getPolicyData: ReadBuffer:  Entering\n" +
    " \n" +
    "03/22 08:52:51 INFO   :......rpapi_getPolicyData: ReadBuffer:  Exiting\n" +
    " \n" +
    "03/22 08:52:51 INFO   :......rpapi_getPolicyData: RSVPFindActionName:  Result = 0\n" +
    " \n" +
    "03/22 08:52:51 INFO   :......rpapi_getPolicyData: RSVPFindActionName:  Exiting\n" +
    " \n" +
    " 14 \n" +
    "03/22 08:52:51 INFO   :......rpapi_getPolicyData: found action name CLCat2 for \n" +
    "flow[sess=9.67.116.99:1047:6,source=9.67.116.98:8000]\n" +
    "03/22 08:52:51 INFO   :......rpapi_getPolicyData: RSVPFindServiceDetailsOnActName:  Entering\n" +
    " \n" +
    "03/22 08:52:51 INFO   :......rpapi_getPolicyData: ReadBuffer:  Entering\n" +
    " \n" +
    "03/22 08:52:51 INFO   :......rpapi_getPolicyData: ReadBuffer:  Exiting\n" +
    " \n" +
    "03/22 08:52:51 INFO   :......rpapi_getPolicyData: RSVPFindServiceDetailsOnActName:  Result = 0\n" +
    " \n" +
    "03/22 08:52:51 INFO   :......rpapi_getPolicyData: RSVPFindServiceDetailsOnActName:  Exiting\n" +
    " \n" +
    "03/22 08:52:51 INFO   :.....api_reader: appl chose service type 1\n" +
    "03/22 08:52:51 INFO   :......rpapi_getSpecData: RSVPGetTSpec:  Entering\n" +
    " \n" +
    "03/22 08:52:51 INFO   :......rpapi_getSpecData: RSVPGetTSpec:  Result = 0\n" +
    " \n" +
    "03/22 08:52:51 INFO   :......rpapi_getSpecData: RSVPGetTSpec:  Exiting\n" +
    " \n" +
    "03/22 08:52:51 TRACE  :.....api_reader: new service=1, old service=0\n" +
    "03/22 08:52:51 INFO   :.......rsvp_flow_stateMachine: state SESSIONED, event PATHDELTA\n" +
    " 15 \n" +
    "03/22 08:52:51 TRACE  :........rsvp_action_nHop: constructing a PATH\n" +
    "03/22 08:52:51 TRACE  :........flow_timer_start: started T1\n" +
    " 16 \n" +
    "03/22 08:52:51 TRACE  :.......rsvp_flow_stateMachine: entering state PATHED\n" +
    "03/22 08:52:51 TRACE  :........mailslot_send: sending to (9.67.116.99:0)\n" +
    "03/22 08:52:51 TRACE  :........mailslot_send: sending to (9.67.116.99:1698)\n" +
    " 17 \n" +
    "03/22 08:52:51 TRACE  :.....rsvp_event: received event from RAW-IP on interface 9.67.116.98\n" +
    "03/22 08:52:51 TRACE  :......rsvp_explode_packet: v=1,flg=0,type=2,cksm=54875,ttl=255,rsv=0,len=84\n" +
    "03/22 08:52:51 TRACE  :.......rsvp_parse_objects: STYLE is WF\n" +
    "03/22 08:52:51 INFO   :.......rsvp_parse_objects: obj RSVP_HOP hop=9.67.116.99, lih=0\n" +
    "03/22 08:52:51 TRACE  :......rsvp_event_mapSession: Session=9.67.116.99:1047:6 exists\n" +
    "03/22 08:52:51 INFO   :.......rsvp_flow_stateMachine: state PATHED, event RESVDELTA\n" +
    " 18 \n" +
    "03/22 08:52:51 TRACE  :........traffic_action_oif: is to install filter\n" +
    "03/22 08:52:51 INFO   :.........qosmgr_request: src-9.67.116.98:8000 dst-9.67.116.99:1047 proto-6 \n" +
    "rthdl-7f5251c8\n" +
    " 19 \n" +
    "03/22 08:52:51 INFO   :.........qosmgr_request: [CL r=90000 b=6000 p=110000 m=1024 M=2048]\n" +
    "03/22 08:52:51 INFO   :.........qosmgr_request: Ioctl to add reservation successful\n" +
    "03/22 08:52:51 INFO   :..........rpapi_Reg_UnregFlow: RSVPPutActionName:  Entering\n" +
    "03/22 08:52:51 INFO   :..........rpapi_Reg_UnregFlow: ReadBuffer:  Entering\n" +
    " \n" +
    "03/22 08:52:52 INFO   :..........rpapi_Reg_UnregFlow: ReadBuffer:  Exiting\n" +
    " \n" +
    "03/22 08:52:52 INFO   :..........rpapi_Reg_UnregFlow: RSVPPutActionName:  Result = 0\n" +
    " \n" +
    "03/22 08:52:52 INFO   :..........rpapi_Reg_UnregFlow: RSVPPutActionName:  Exiting\n" +
    " \n" +
    "03/22 08:52:52 INFO   :..........rpapi_Reg_UnregFlow: flow[sess=9.67.116.99:1047:6, \n" +
    "source=9.67.116.98:8000] registered with CLCat2\n" +
    "03/22 08:52:52 EVENT  :..........qosmgr_response: RESVRESP from qosmgr, reason=0, qoshandle=8b671d0\n" +
    "03/22 08:52:52 INFO   :..........qosmgr_response: src-9.67.116.98:8000 dst-9.67.116.99:1047 proto-6\n" +
    "03/22 08:52:52 TRACE  :...........traffic_reader: tc response msg=1, status=1\n" +
    "03/22 08:52:52 INFO   :...........traffic_reader: Reservation req successful[session=9.67.116.99:1047:6,\n" +
    "source=9.67.116.98:8000, qoshd=8b671d0]\n" +
    " 20 \n" +
    "03/22 08:52:52 TRACE  :........api_action_sender: constructing a RESV\n" +
    "03/22 08:52:52 TRACE  :........flow_timer_stop: stopped T1\n" +
    "03/22 08:52:52 TRACE  :........flow_timer_stop: Stop T4\n" +
    "03/22 08:52:52 TRACE  :........flow_timer_start: started T1\n" +
    "03/22 08:52:52 TRACE  :........flow_timer_start: Start T4\n" +
    " 21 \n" +
    "03/22 08:52:52 TRACE  :.......rsvp_flow_stateMachine: entering state RESVED\n" +
    " 22 \n" +
    "03/22 08:53:07 EVENT  :..mailslot_sitter: process received signal SIGALRM\n" +
    "03/22 08:53:07 TRACE  :.....event_timerT1_expire: T1 expired\n" +
    "03/22 08:53:07 INFO   :......router_forward_getOI: Ioctl to query route entry successful\n" +
    "03/22 08:53:07 TRACE  :......router_forward_getOI:         source address:   9.67.116.98\n" +
    "03/22 08:53:07 TRACE  :......router_forward_getOI:         out inf:   9.67.116.98\n" +
    "03/22 08:53:07 TRACE  :......router_forward_getOI:         gateway:   0.0.0.0\n" +
    "03/22 08:53:07 TRACE  :......router_forward_getOI:         route handle:   7f5251c8\n" +
    "03/22 08:53:07 INFO   :......rsvp_flow_stateMachine: state RESVED, event T1OUT\n" +
    "03/22 08:53:07 TRACE  :.......rsvp_action_nHop: constructing a PATH\n" +
    "03/22 08:53:07 TRACE  :.......flow_timer_start: started T1\n" +
    "03/22 08:53:07 TRACE  :......rsvp_flow_stateMachine: reentering state RESVED\n" +
    "03/22 08:53:07 TRACE  :.......mailslot_send: sending to (9.67.116.99:0)\n" +
    " 23 \n" +
    "03/22 08:53:22 TRACE  :.....rsvp_event: received event from RAW-IP on interface 9.67.116.98\n" +
    "03/22 08:53:22 TRACE  :......rsvp_explode_packet: v=1,flg=0,type=2,cksm=54875,ttl=255,rsv=0,len=84\n" +
    "03/22 08:53:22 TRACE  :.......rsvp_parse_objects: STYLE is WF\n" +
    "03/22 08:53:22 INFO   :.......rsvp_parse_objects: obj RSVP_HOP hop=9.67.116.99, lih=0\n" +
    "03/22 08:53:22 TRACE  :......rsvp_event_mapSession: Session=9.67.116.99:1047:6 exists\n" +
    "03/22 08:53:22 INFO   :.......rsvp_flow_stateMachine: state RESVED, event RESV\n" +
    "03/22 08:53:22 TRACE  :........flow_timer_stop: Stop T4\n" +
    "03/22 08:53:22 TRACE  :........flow_timer_start: Start T4\n" +
    "03/22 08:53:22 TRACE  :.......rsvp_flow_stateMachine: reentering state RESVED\n" +
    "03/22 08:53:22 EVENT  :..mailslot_sitter: process received signal SIGALRM\n" +
    "03/22 08:53:22 TRACE  :.....event_timerT1_expire: T1 expired\n" +
    "03/22 08:53:22 INFO   :......router_forward_getOI: Ioctl to query route entry successful\n" +
    "03/22 08:53:22 TRACE  :......router_forward_getOI:         source address:   9.67.116.98\n" +
    "03/22 08:53:22 TRACE  :......router_forward_getOI:         out inf:   9.67.116.98\n" +
    "03/22 08:53:22 TRACE  :......router_forward_getOI:         gateway:   0.0.0.0\n" +
    "03/22 08:53:22 TRACE  :......router_forward_getOI:         route handle:   7f5251c8\n" +
    "03/22 08:53:22 INFO   :......rsvp_flow_stateMachine: state RESVED, event T1OUT\n" +
    "03/22 08:53:22 TRACE  :.......rsvp_action_nHop: constructing a PATH\n" +
    "03/22 08:53:22 TRACE  :.......flow_timer_start: started T1\n" +
    "03/22 08:53:22 TRACE  :......rsvp_flow_stateMachine: reentering state RESVED\n" +
    "03/22 08:53:22 TRACE  :.......mailslot_send: sending to (9.67.116.99:0)\n" +
    "03/22 08:53:38 EVENT  :..mailslot_sitter: process received signal SIGALRM\n" +
    "03/22 08:53:38 TRACE  :.....event_timerT1_expire: T1 expired\n" +
    "03/22 08:53:38 INFO   :......router_forward_getOI: Ioctl to query route entry successful\n" +
    "03/22 08:53:38 TRACE  :......router_forward_getOI:         source address:   9.67.116.98\n" +
    "03/22 08:53:38 TRACE  :......router_forward_getOI:         out inf:   9.67.116.98\n" +
    "03/22 08:53:38 TRACE  :......router_forward_getOI:         gateway:   0.0.0.0\n" +
    "03/22 08:53:38 TRACE  :......router_forward_getOI:         route handle:   7f5251c8\n" +
    "03/22 08:53:38 INFO   :......rsvp_flow_stateMachine: state RESVED, event T1OUT\n" +
    "03/22 08:53:38 TRACE  :.......rsvp_action_nHop: constructing a PATH\n" +
    "03/22 08:53:38 TRACE  :.......flow_timer_start: started T1\n" +
    "03/22 08:53:38 TRACE  :......rsvp_flow_stateMachine: reentering state RESVED\n" +
    "03/22 08:53:38 TRACE  :.......mailslot_send: sending to (9.67.116.99:0)\n" +
    "03/22 08:53:52 TRACE  :.....rsvp_event: received event from RAW-IP on interface 9.67.116.98\n" +
    "03/22 08:53:52 TRACE  :......rsvp_explode_packet: v=1,flg=0,type=2,cksm=54875,ttl=255,rsv=0,len=84\n" +
    "03/22 08:53:52 TRACE  :.......rsvp_parse_objects: STYLE is WF\n" +
    "03/22 08:53:52 INFO   :.......rsvp_parse_objects: obj RSVP_HOP hop=9.67.116.99, lih=0\n" +
    "03/22 08:53:52 TRACE  :......rsvp_event_mapSession: Session=9.67.116.99:1047:6 exists\n" +
    "03/22 08:53:52 INFO   :.......rsvp_flow_stateMachine: state RESVED, event RESV\n" +
    "03/22 08:53:52 TRACE  :........flow_timer_stop: Stop T4\n" +
    "03/22 08:53:52 TRACE  :........flow_timer_start: Start T4\n" +
    "03/22 08:53:52 TRACE  :.......rsvp_flow_stateMachine: reentering state RESVED\n" +
    "03/22 08:53:53 EVENT  :..mailslot_sitter: process received signal SIGALRM\n" +
    "03/22 08:53:53 TRACE  :.....event_timerT1_expire: T1 expired\n" +
    "03/22 08:53:53 INFO   :......router_forward_getOI: Ioctl to query route entry successful\n" +
    "03/22 08:53:53 TRACE  :......router_forward_getOI:         source address:   9.67.116.98\n" +
    "03/22 08:53:53 TRACE  :......router_forward_getOI:         out inf:   9.67.116.98\n" +
    "03/22 08:53:53 TRACE  :......router_forward_getOI:         gateway:   0.0.0.0\n" +
    "03/22 08:53:53 TRACE  :......router_forward_getOI:         route handle:   7f5251c8\n" +
    "03/22 08:53:53 INFO   :......rsvp_flow_stateMachine: state RESVED, event T1OUT\n" +
    "03/22 08:53:53 TRACE  :.......rsvp_action_nHop: constructing a PATH\n" +
    "03/22 08:53:53 TRACE  :.......flow_timer_start: started T1\n" +
    "03/22 08:53:53 TRACE  :......rsvp_flow_stateMachine: reentering state RESVED\n" +
    "03/22 08:53:53 TRACE  :.......mailslot_send: sending to (9.67.116.99:0)\n" +
    "03/22 08:54:09 EVENT  :..mailslot_sitter: process received signal SIGALRM\n" +
    "03/22 08:54:09 TRACE  :.....event_timerT1_expire: T1 expired\n" +
    "03/22 08:54:09 INFO   :......router_forward_getOI: Ioctl to query route entry successful\n" +
    "03/22 08:54:09 TRACE  :......router_forward_getOI:         source address:   9.67.116.98\n" +
    "03/22 08:54:09 TRACE  :......router_forward_getOI:         out inf:   9.67.116.98\n" +
    "03/22 08:54:09 TRACE  :......router_forward_getOI:         gateway:   0.0.0.0\n" +
    "03/22 08:54:09 TRACE  :......router_forward_getOI:         route handle:   7f5251c8\n" +
    "03/22 08:54:09 INFO   :......rsvp_flow_stateMachine: state RESVED, event T1OUT\n" +
    "03/22 08:54:09 TRACE  :.......rsvp_action_nHop: constructing a PATH\n" +
    "03/22 08:54:09 TRACE  :.......flow_timer_start: started T1\n" +
    "03/22 08:54:09 TRACE  :......rsvp_flow_stateMachine: reentering state RESVED\n" +
    "03/22 08:54:09 TRACE  :.......mailslot_send: sending to (9.67.116.99:0)\n" +
    "03/22 08:54:22 TRACE  :.....rsvp_event: received event from RAW-IP on interface 9.67.116.98\n" +
    "03/22 08:54:22 TRACE  :......rsvp_explode_packet: v=1,flg=0,type=2,cksm=54875,ttl=255,rsv=0,len=84\n" +
    "03/22 08:54:22 TRACE  :.......rsvp_parse_objects: STYLE is WF\n" +
    "03/22 08:54:22 INFO   :.......rsvp_parse_objects: obj RSVP_HOP hop=9.67.116.99, lih=0\n" +
    "03/22 08:54:22 TRACE  :......rsvp_event_mapSession: Session=9.67.116.99:1047:6 exists\n" +
    "03/22 08:54:22 INFO   :.......rsvp_flow_stateMachine: state RESVED, event RESV\n" +
    "03/22 08:54:22 TRACE  :........flow_timer_stop: Stop T4\n" +
    "03/22 08:54:22 TRACE  :........flow_timer_start: Start T4\n" +
    "03/22 08:54:22 TRACE  :.......rsvp_flow_stateMachine: reentering state RESVED\n" +
    "03/22 08:54:24 EVENT  :..mailslot_sitter: process received signal SIGALRM\n" +
    "03/22 08:54:24 TRACE  :.....event_timerT1_expire: T1 expired\n" +
    "03/22 08:54:24 INFO   :......router_forward_getOI: Ioctl to query route entry successful\n" +
    "03/22 08:54:24 TRACE  :......router_forward_getOI:         source address:   9.67.116.98\n" +
    "03/22 08:54:24 TRACE  :......router_forward_getOI:         out inf:   9.67.116.98\n" +
    "03/22 08:54:24 TRACE  :......router_forward_getOI:         gateway:   0.0.0.0\n" +
    "03/22 08:54:24 TRACE  :......router_forward_getOI:         route handle:   7f5251c8";


  constructor() {

  }

  met = {
    snr: {
      down: 15,
      up: 17,
    },
    att: {
      down: 5,
      up: 9,
    },
    power: {
      up: 75,
      down: 80,
    }
  };

  interfaces = ["getMetrics", "getLogs"];

  // delay(ms: number): Promise {
  //   return new Promise( resolve => setTimeout(resolve, ms));
  // }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log("prueba interceptor deviceList");

    // if (req.url.search('/devicesList') > -1) {
    //   console.log('devicesList matchea');
    //   return this.getDevices(req);
    // }

    for(let iface of this.interfaces){
      if (req.url.search(iface) > -1){
        let res = this[iface](req);
        return this.wrapResponse(res);
      }
    }

    return next.handle(req);
  }

  getMetrics(req: HttpRequest<any>){
    // console.log("devolviendo metricas");
    this.met.snr.up = 2 * Math.sin(200 * (Date.now() / 1000)) + 15;
    this.met.snr.down = 2 * Math.sin(215 * (Date.now() / 1000)) + 17;
    this.met.att.up = 2 * Math.sin(190 * (Date.now() / 1000)) + 5;
    this.met.att.down = 2 * Math.sin(213 * (Date.now() / 1000)) + 9;
    this.met.power.up = 2 * Math.sin(201 * (Date.now() / 1000)) + 75;
    this.met.power.down = 2 * Math.sin(203 * (Date.now() / 1000)) + 80;


    return this.met;
  }

  getLogs(req: HttpRequest<any>){
    return this.log;
  }

  wrapResponse(data): Observable<HttpEvent<any>> {
    console.log("devolviendo observable de data : " + JSON.stringify(data));
    return from(
      new Promise<any>( resolve => {
        setTimeout( () => {
          resolve(
            new HttpResponse( {
              status:200,
              body:data,
            })
          );
        }, 200);
      })
    );

    // return from( new Promise(resolve => {
    //   setTimeout( () => {
    //     resolve(
    //       new HttpResponse({
    //         status: 200,
    //         body: data,
    //       })
    //     );
    //   }, 100);
    // }));
    // return of(new HttpResponse({
    //   status: 200,
    //   body: data
    // }));
  }
}
