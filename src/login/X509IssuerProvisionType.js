
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';



const X509IssuerProvision = new GraphQLObjectType({
  name: 'X509IssuerProvisionType',
  description: 'Type for X509IssuerProvision in login',

  fields: () => ({
    certProvisionId: {type: GraphQLString},
    commonName: {type: GraphQLInt},
    country: {type: GraphQLInt},
    serialNumber: {type: GraphQLInt},
    organizationName: {type: GraphQLInt},
    cityLocality: {type: GraphQLInt},
    stateProvince: {type: GraphQLInt},
    organizationalUnit: {type: GraphQLInt}
  })
});

export {X509IssuerProvision};
    